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
  async fetchResidentsOf ({commit, state, dispatch}, planetId) {
    // Here we store all callbacks so we can execute them concurrently
    let callbacks = []
    const residents = []

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
            })
          })
          .then(() => {
            // Now we can 'receive' residents
            commit(type.RECEIVE_RESIDENTS, residents)
            commit(type.LOADING_DATA, false)
          })
      })
  },
  async fetchResidentSpecies ({commit, state}, residentId) {}
}
