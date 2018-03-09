export default {
  getDefaultPlanet: state => {
    return state.defaultPlanet
  },
  getPlanet: state => {
    return state.planet
  },
  isLoading: state => {
    return state.loading
  },
  getLanguage: state => {
    return state.language
  }
}
