<template>
    <div>
      <loader :loading="loading" color="#4c555a"></loader>
      <template v-if="!loading">
        <h4 class="title">
          <span v-localize="{i: 'residents.title'}"></span>
          <span class="planet">{{planet.name}}</span>
        </h4>

        <div class="table-responsive">
          <table class="table table-striped" v-if="!loading">
            <thead>
            <tr>
              <th scope="col"><span v-localize="{i: 'residents.table.rows.name'}"></span></th>
              <th scope="col"><span v-localize="{i: 'residents.table.rows.height'}"></span></th>
              <th scope="col" style="min-width: 135px;"><span v-localize="{i: 'residents.table.rows.weight'}"></span></th>
              <th scope="col" style="text-align: left; min-width: 168px;"><span v-localize="{i: 'residents.table.rows.hairColor'}"></span></th>
              <th scope="col"><span v-localize="{i: 'residents.table.rows.species'}"></span></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(resident,key) in planet.detailedResidents" v-bind:key="key">
              <td>{{ resident.name }}</td>
              <td>{{ height(resident.height) }}</td>
              <td>
                <span v-if="resident.mass === 'unknown'" v-localize="{i: 'residents.table.weight.unknown'}"></span>
                <span v-else>{{ weight(resident.mass) }}</span>
              </td>
              <td style="text-align: left;">
                <span v-html="colorbox(resident.hair_color)"></span>
              </td>
              <td>
                <template v-for="(species, key) in resident.detailedSpecies">
                  <span v-localize="{i: `residents.species.${species.name}`}" :key="key"></span>
                </template>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
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

// Mixins
import utils from '@/utils/mixins/utils'

@Component({
  name: 'ResidentsPage',
  components: { Layout, Loader },
  mixins: [utils],
  computed: {
    ...mapGetters({
      defaultPlanet: 'getDefaultPlanet',
      planet: 'getPlanet',
      loading: 'isLoading',
      unitSystem: 'getUnitSystem'
    })
  },
  methods: {
    ...mapActions({ getResidentsOf: 'getResidentsOf' }),
    height (value) {
      // check default unit system, if metric convert cm => m
      if (this.unitSystem === 'metric') {
        return this.toMeters(value)
      }

      return this.toFeet(value)
    },
    weight (value) {
      if (this.unitSystem === 'metric') {
        return this.toKilograms(value)
      }

      return this.toPounds(value)
    }
  }
})
export default class ResidentsPage extends Vue {
  created () {
    this.getResidentsOf(this.defaultPlanet)
  }
}
</script>

<style scoped lang="scss">
.title {
  padding: 10px 0 15px;

  .planet {
    border-bottom: 2px dotted rgba(0,0,0,.33);
    &:hover {
      cursor: pointer;
    }
  }
}
table {
  thead {
    th {
      min-width: 120px;
    }
  }
}
</style>
