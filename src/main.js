/* eslint-disable no-unused-vars */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import _ from 'lodash'
import router from './router'
import store from './store'
import Localize from 'v-localize'
import * as svgicon from 'vue-svgicon'

// Assets (SVGs)
import './assets/js/index'
// Filters
import filters from './utils/filters'
// Locales
import localize from './utils/locale'

Vue.config.productionTip = false

Vue.use(Localize)
Vue.use(svgicon, { tagName: 'icon' })

_.each(filters, function (filter, key) {
  if (Vue.filter(key)) {
    console.warn(`Filter [${key}} has already been installed.`)
  } else {
    console.info(`Filter [${key}] has been installed.`)
    Vue.filter(key, filter)
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
