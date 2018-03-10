<template>
    <div>
      <span v-html="$options.filters.colorize($options.filters.split(names, ','))"></span>
    </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import {mapActions, mapGetters} from 'vuex'
import Loader from 'vue-spinner/src/PulseLoader.vue'
import _ from 'lodash'

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
  },
  filters: {
    split (str, separator) {
      separator = separator || ''
      if (_.isString(str)) {
        return str.split(separator)
      } else {
        return str
      }
    },
    colorize (colors) {
      const validColors = {blond: '#d8b041', brown: 'brown', black: 'black', grey: 'grey'}
      let result = ''

      colors.forEach((color) => {
        if (color in validColors) {
          result += `<span class="colorbox" style="background: ${validColors[color]};"></span> ${color}`
        }
      })

      return result
    }
  }
})
export default class DemoPage extends Vue {
  names = 'blond,brown'
  mounted () {
    console.log('Loading %s', this.loading)
  }
}
</script>

<style>
</style>
