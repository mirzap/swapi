import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  defaultPlanet: 1,
  planet: {},
  language: 'en',
  unitSystem: 'metric',
  loading: false,
  settingsUpdated: false
}

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
  plugins: [createPersistedState()]
})
