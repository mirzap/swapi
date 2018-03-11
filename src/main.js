/* eslint-disable no-unused-vars */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Localize from 'v-localize'
import * as svgicon from 'vue-svgicon'
import './assets/js/index'

// Filters
// import split from './utils/filters/split'

Vue.config.productionTip = false

Vue.use(Localize)
// Default tag name is 'svgicon'
Vue.use(svgicon, {
  tagName: 'icon'
})

let localize = Localize.config({
  default: store.state.language,
  available: ['en', 'bs'],
  fallback: 'en',
  localizations: {
    'en': {
      residents: {
        title: 'Showing residents of ',
        table: {
          rows: {
            name: 'Name',
            height: 'Height',
            weight: 'Weight',
            hairColor: 'Hair Color',
            species: 'Species'
          },
          weight: {
            unknown: 'Unknown'
          },
          hairColor: {
            blond: 'blond',
            none: 'none',
            brown: 'brown',
            grey: 'grey',
            black: 'black',
            white: 'white'
          }
        },
        species: {
          Human: 'Human',
          Droid: 'Droid'
        }
      },
      navigation: {
        residents: 'Residents',
        settings: 'Settings'
      },
      settings: {
        language: {
          title: 'Language',
          text: 'Here you can easily change your language preference.'
        },
        units: {
          title: 'Units',
          text: 'Specify the default unit system for the app.',
          metric: 'Metric',
          imperial: 'Imperial'
        },
        storage: {
          title: 'Storage',
          text: 'Decide whether you want to use local storage to persist the data.',
          labels: {
            yes: 'Use local storage',
            no: 'Don\'t use local storage'
          }
        }
      }
    },
    'bs': {
      residents: {
        title: 'Lista stanovnika planete ',
        table: {
          rows: {
            name: 'Ime',
            height: 'Visina',
            weight: 'Težina',
            hairColor: 'Boja kose',
            species: 'Vrsta'
          },
          weight: {
            unknown: 'Nepoznato'
          },
          hairColor: {
            blond: 'plava',
            none: 'nije poznato',
            brown: 'smeđa',
            grey: 'siva',
            black: 'crna',
            white: 'bijela'
          }
        },
        species: {
          Human: 'Čovjek',
          Droid: 'Robot'
        }
      },
      species: {
        Human: 'Covjek'
      },
      navigation: {
        residents: 'Stanovnici',
        settings: 'Postavke'
      },
      settings: {
        language: {
          title: 'Jezik',
          text: 'Ovdje možete promijeniti svoje jezičke postavke.'
        },
        units: {
          title: 'Sistem mjernih jedinica',
          text: 'Odaberite sistem mjernih jedinica koji želite koristiti.',
          metric: 'Metrični',
          imperial: 'Imperijalni'
        },
        storage: {
          title: 'Lokalna memorija',
          text: 'Da li želite koristiti lokalnu memoriju za snimanje podataka?',
          labels: {
            yes: 'Koristi lokalnu memoriju',
            no: 'Ne želim koristiti lokalnu memoriju'
          }
        }
      }
    }
  }
})

Vue.filter('colorize', function (colors) {
  colors = colors.toString().split(',')
  let result = ''

  colors.forEach((color) => {
    result += `<span class="colorbox" style="background-color: ${color};"></span> ${color}`
  })

  return result
})

// eslint-disable no-new
const app = new Vue({
  el: '#app',
  router,
  store,
  localize,
  components: { App },
  template: '<App/>'
})
