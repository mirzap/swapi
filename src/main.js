/* eslint-disable no-unused-vars */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Localize from 'v-localize'
import * as SvgIcon from 'vue-svgicon'
import VueUnits from 'vue-units'

// Assets (SVGs)
import './assets/js/index'
// Filters
import Filters from './utils/filters'
// Locales
import locale from './utils/locale'

Vue.config.productionTip = false

Vue.use(Localize)
Vue.use(Filters)
Vue.use(VueUnits)
Vue.use(SvgIcon, { tagName: 'icon' })

// eslint-disable no-new
const app = new Vue({
  el: '#app',
  router,
  store,
  localize: locale,
  components: { App },
  template: '<App/>'
})
