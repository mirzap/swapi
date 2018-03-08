<template>
    <div>
      <loader :loading="loading" color="#4c555a"></loader>
      <template v-if="!loading">
        <h4>Showing residents of planet {{planet.name}}</h4>

        <table class="table table-striped">
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
          <tr v-for="(resident,key) in residents" v-bind:key="key">
            <td>{{resident.name}}</td>
            <td>{{resident.height}}</td>
            <td>{{resident.mass}}</td>
            <td style="text-align: left">
              <span class="color"></span>
              {{resident.hair_color}}
            </td>
            <td>x</td>
          </tr>
          </tbody>
        </table>
      </template>
    </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import {mapState, mapGetters, mapActions} from 'vuex'
import Loader from 'vue-spinner/src/PulseLoader.vue'

// App components
import Layout from '@/components/Layout'

@Component({
  name: 'ResidentsPage',
  components: { Layout, Loader },
  computed: {
    ...mapState({
      planet: state => state.planet,
      loading: state => state.loading
    }),
    ...mapGetters({
      residents: 'getResidents'
    })
  },
  methods: {
    ...mapActions({
      getResidentsOf: 'fetchResidentsOf'
    })
  }
})
export default class ResidentsPage extends Vue {
  created () {
    this.getResidentsOf(1)
  }
  mounted () {}
}
</script>

<style scoped>
  .color {
    width: 20px;
    height: 20px;
    background: red;
    display: inline-block;
    vertical-align: text-top;
  }
</style>
