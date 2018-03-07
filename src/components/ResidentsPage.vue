<template>
    <div>
      <loader :loading="loading" color="#4c555a"></loader>
      <template v-if="!loading">
        <h4>Showing residents of planet {{planet.name}}</h4>

        <ul>
          <li v-for="(resident,key) in residents" v-bind:key="key">{{resident.name}}</li>
        </ul>
      </template>
    </div>
</template>

<script>
import Vue from 'vue'
import _ from 'lodash'
import Component from 'vue-class-component'
import Loader from 'vue-spinner/src/PulseLoader.vue'

import Layout from '@/components/Layout'
import {planets} from '@/api/planets'
import {default as api, concurrent} from '@/api/api'

@Component({
  name: 'ResidentsPage',
  components: { Layout, Loader }
})
export default class ResidentsPage extends Vue {
  loading = true;
  planet = {}
  callbacks = []
  residents = []

  mounted () {
    planets.getPlanet(1)
      .then(r => {
        console.log(r.data)
        this.planet = r.data
        return r.data
      })
      .then(r => {
        let res = r.residents
        let self = this

        _.each(res, function (resident) {
          self.callbacks.push(api.get(resident))
        })
      })
      .then(() => {
        concurrent(this.callbacks)
          .then(r => {
            let self = this
            _.each(r, (d) => {
              self.residents.push(d.data)
            })
          })
          .then(() => {
            this.loading = false
          })
      })
  }
}
</script>

<style scoped>

</style>
