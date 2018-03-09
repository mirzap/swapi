<template>
    <div>
      <loader :loading="loading" color="#4c555a"></loader>
      <template v-if="!loading">
        <h4 class="title">Showing residents of planet {{planet.name}}</h4>

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
              <template v-for="(species, key) in resident.detailedSpecies">
                <span v-localize="{i: `residents.species.${species.name}`}" :key="key"></span>
              </template>
            </td>
          </tr>
        </tbody>
        </table>
      </template>
    </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import {mapActions, mapGetters} from 'vuex'
import Loader from 'vue-spinner/src/PulseLoader.vue'

// App components
import Layout from '@/components/Layout'

@Component({
  name: 'ResidentsPage',
  components: { Layout, Loader },
  computed: {
    ...mapGetters({
      defaultPlanet: 'getDefaultPlanet',
      planet: 'getPlanet',
      loading: 'isLoading'
    })
  },
  methods: {
    ...mapActions({ getResidentsOf: 'getResidentsOf' })
  }
})
export default class ResidentsPage extends Vue {
  created () {
    this.getResidentsOf(this.defaultPlanet)
  }
}
</script>

<style scoped>
  .title {
    padding: 10px 0 15px;
  }
  .color {
    width: 20px;
    height: 20px;
    background: red;
    display: inline-block;
    vertical-align: text-top;
  }
</style>
