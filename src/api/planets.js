import api from './api'

export const planets = {
  async getPlanets () {
    let planets = await api.get('planets')

    return planets
  },
  async getPlanet (id) {
    let planet = await api.get(`planets/${id}`)

    return planet
  }
}
