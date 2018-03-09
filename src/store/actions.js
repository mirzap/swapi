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
    await dispatch('fetchPlanet', `planets/${planetId}`)
  },
  setLanguage ({commit}, lang) {
    commit(type.SET_LANGUAGE, lang)
  }
}
