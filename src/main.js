/* eslint-disable no-unused-vars */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as svgicon from 'vue-svgicon'
import './assets/js/index'

Vue.config.productionTip = false

// Default tag name is 'svgicon'
Vue.use(svgicon, {
  tagName: 'icon'
})

// eslint-disable no-new
// eslint-disable no-unused-vars
const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
