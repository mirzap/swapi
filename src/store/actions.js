import _ from 'lodash'

import {default as api, concurrent} from '@/api/api'
import * as type from './mutation-types'
import {planets} from '@/api/planets'

export default {
  fetchPlanet ({commit, state}, planetId) {
    commit(type.LOADING_DATA, true)

    return new Promise((resolve, reject) => {
      planets.getPlanet(planetId)
        .then(planet => {
          commit(type.RECEIVE_PLANET_DATA, planet.data)
          resolve(planet)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  fetchResidentsOf ({commit, state, dispatch}, planetId) {
    // Here we store all callbacks so we can execute them concurrently
    let callbacks = []
    const residents = []
    const residentsSpecies = []

    dispatch('fetchPlanet', planetId)
      .then(r => {
        _.each(r.data.residents, function (resident) {
          callbacks.push(api.get(resident))
        })
      })
      .then(() => {
        concurrent(callbacks)
          .then(response => {
            callbacks = []
            _.each(response, function (resident) {
              residents.push(resident.data)
              // Now we fetch species data
              // let residentKey = _.kebabCase(_.toLower(resident.data.name))
              let species = {}
              _.assign(species, { name: _.kebabCase(_.toLower(resident.data.name)), species: resident.data.species })

              residentsSpecies.push(species)
            })
          })
          .then(() => {
            let species = residentsSpecies
            console.log('Species callbacks')
            commit(type.RECEIVE_RESIDENTS, residents)
            commit(type.LOAD_RESIDENT_SPECIES, species)
            commit(type.LOADING_DATA, false)
          })
      })
  },
  async fetchResidentSpecies ({commit, state}, residentId) {}
}
