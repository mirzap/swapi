<template>
    <div>
      <loader :loading="loading" color="#4c555a"></loader>
      <h2 v-if="!loading">Residents of {{ planet.name }}</h2>
      <table class="table table-striped" v-if="!loading">
        <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Height</th>
          <th scope="col">Weight</th>
          <th scope="col" style="text-align: left">Hair Color</th>
          <th scope="col">Species</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(resident,key) in planet.detailedResidents" v-bind:key="key">
          <td>{{resident.name}}</td>
          <td>{{resident.height}}</td>
          <td>{{resident.mass}}</td>
          <td style="text-align: left">
            <span class="color"></span>
            {{resident.hair_color}}
          </td>
          <td>
            <template v-for="(species, key) in resident.detailedSpecies" @key="key">
              {{species.name}}
            </template>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import {mapActions, mapGetters} from 'vuex'
import Loader from 'vue-spinner/src/PulseLoader.vue'

import Layout from './Layout'

@Component({
  name: 'DemoPage',
  components: { Layout, Loader },
  methods: {
    ...mapActions(['fetchPlanet'])
  },
  computed: {
    ...mapGetters({
      planet: 'getPlanet',
      loading: 'isLoading'
    })
  }
})
export default class DemoPage extends Vue {
  mounted () {
    console.log('Loading %s', this.loading)
  }
  created () {
    this.fetchPlanet('https://swapi.co/api/planets/28')
  }
}
</script>

<style scoped>

</style>
