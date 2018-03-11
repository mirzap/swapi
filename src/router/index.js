import Vue from 'vue'
import Router from 'vue-router'
import SettingsPage from '@/components/SettingsPage'
import ResidentsPage from '@/components/ResidentsPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/residents'
    },
    {
      path: '/residents',
      name: 'residents',
      component: ResidentsPage
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsPage
    }
  ]
})
