import _ from 'lodash'
import * as type from './mutation-types'

export default {
  [type.LOADING_DATA] (state, loading) {
    state.loading = loading
  },
  [type.RECEIVE_PLANET_DATA] (state, planet) {
    _.assign(state.planet, planet)
  },
  [type.RECEIVE_RESIDENTS] (state, residents) {
    state.residents = residents
  },
  [type.LOAD_RESIDENT_SPECIES] (state, residentSpecies) {
    console.log('MUTATION')
    console.log(residentSpecies)
    state.residentsSpecies = residentSpecies
  }
}
