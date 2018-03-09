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

Vue.config.productionTip = false

Vue.use(Localize)
// Default tag name is 'svgicon'
Vue.use(svgicon, {
  tagName: 'icon'
})

let localize = Localize.config({
  default: store.state.language,
  available: ['en', 'bs'],
  fallback: '?',
  localizations: {
    'en': {
      residents: {
        species: {
          Human: 'Human',
          Droid: 'Droid'
        }
      },
      species: {
        Human: 'Humans'
      },
      header: {
        title: 'English'
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
        }
      }
    },
    'bs': {
      residents: {
        species: {
          Human: 'Čovjek',
          Droid: 'Robot'
        }
      },
      species: {
        Human: 'Covjek'
      },
      header: {
        title: 'Engleski'
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
        }
      }
    }
  }
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
