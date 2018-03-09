import _ from 'lodash'
import * as type from './mutation-types'

export default {
  [type.LOADING_DATA] (state, status) {
    state.loading = status
  },
  [type.RECEIVE_PLANET_DATA] (state, planet) {
    _.assign(state.planet, planet)
  },
  [type.SET_LANGUAGE] (state, lang) {
    state.language = lang
  }
}
