import _ from 'lodash'
import api from '@/api'
import * as type from './mutation-types'

export default {
  async fetchPlanet ({commit, state}, url) {
    commit(type.LOADING_DATA, true)
    const planet = await api.fetchPlanet(url)
    commit(type.RECEIVE_PLANET_DATA, planet)
    commit(type.LOADING_DATA, false)
  },
  async getResidentsOf ({state, dispatch}, planetId) {
    const localStorage = JSON.parse(window.localStorage.getItem('vuex'))

    // Make API requests only if no previous data in localStorage
    if (_.isEmpty(localStorage)) {
      await dispatch('fetchPlanet', `planets/${planetId}`)
    }
  },
  setLanguage ({commit}, lang) {
    commit(type.SET_LANGUAGE, lang)
  },
  setUnitSystem ({commit}, system) {
    commit(type.SET_UNIT_SYSTEM, system)
  }
}
