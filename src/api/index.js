import axios from 'axios'

// Default axios configuration
const api = axios.create({
  baseURL: 'https://swapi.co/api/',
  timeout: 100000,
  headers: {'Content-Type': 'application/json'}
})

// Sometimes we want to wait for bunch of requests to execute in parallel
export function concurrent (cb) {
  return axios.all(cb)
}

export default {
  async fetchPlanet (url) {
    console.log('Fetching URL: %s', url)
    let result = null
    result = await api.get(url)
    let planet = result.data
    planet.detailedResidents = await this.fetchResidents(planet.residents)
    return planet
  },
  async fetchResidents (residents) {
    let residentsPromise = residents.map((url) => {
      return api.get(url).then(async (result) => {
        let resident = result.data
        resident.detailedSpecies = await this.fetchSpecies(resident.species)
        return resident
      }
      )
    })
    return concurrent(residentsPromise)
  },
  async fetchSpecies (species) {
    let speciesPromise = species.map(url => api.get(url).then(result => result.data))
    return concurrent(speciesPromise)
  }
}
