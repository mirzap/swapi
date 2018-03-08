export default {
  getDefaultPlanet: state => {
    return state.defaultPlanet
  },
  // Returns an residents of current default planet
  getResidents: state => {
    return state.residents
  }
}
