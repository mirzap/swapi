<template>
    <div>
      <h1>Demo page</h1>
      <p v-for="r in swapi.residents">{{r.name}} - {{ r.speciesInfo }}</p>
    </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import {Observable} from 'rxjs'
import _ from 'lodash'
// import {mergeMap} from 'rxjs/operators'

import Layout from './Layout'
import {default as api} from '@/api/api'

@Component({
  name: 'DemoPage',
  components: { Layout }
})
export default class DemoPage extends Vue {
  species = ''
  residents = ''
  swapi = {}

  async query () {
    let results = {}
    // Planet name
    // Make request to https://swapi.co/api/planets/1
    let planet = await api.get('https://swapi.co/api/planets/1')
    results.planet = planet.data

    // Planet residents
    results.residents = []
    planet.data.residents.forEach(async (url) => {
      const residentResponse = await api.get(url)
      const resident = residentResponse.data

      // Resident species
      // Making request to https://swapi.co/api/species/1/
      resident.species.forEach(async (url) => {
        const speciesResponse = await api.get(url)
        const species = speciesResponse.data

        _.assign(resident, {speciesInfo: species.name})
        results.residents.push(resident)
      })
    })

    return results
  }

  async getData () {
    let d = await this.query()
    return d
  }
  setPlanetResidents (residents) {
    this.residents = residents
    let requestStream = ''
    let responseStream = ''

    _.each(residents, function (resident) {
      requestStream = Observable.of(resident)

      responseStream = requestStream.flatMap(
        requestUrl => Observable.fromPromise(fetch(requestUrl).then(r => r.json()))
      )

      responseStream.subscribe(r => {
        console.log(r)
      })
    })
  }

  planets () {
    return Observable.fromPromise(api.get('planets/1/'))
  }
  people () {
    return Observable.fromPromise(api.get('people/1/'))
  }
  getResident (resident) {
    return Observable.fromPromise(api.get(resident))
  }
  mounted () {
    try {
      let q = this.query()
      let self = this
      q.then(r => {
        console.log(r)
        self.swapi = r
      })
    } catch (e) {
      console.log(e)
    }
  }
  created () {
    /*
    const requestStream = Observable.of('https://swapi.co/api/planets/1')
    const responseStream = requestStream.flatMap(
      requestUrl => Observable.fromPromise(fetch(requestUrl).then(r => r.json()))
    )

    responseStream.subscribe(response => {
      console.log(response)
      this.setPlanetResidents(response.residents)
    }) */
    /*
    let g = Observable.forkJoin(
      _.each()
    ) */
    /*
    this.people().subscribe(t => {
      console.log('Residents')
      console.log(t.data.name)
      this.getResident(t.data.species).subscribe(s => {
        console.log('Species Info')
        console.log(s.data.name)
      })
    }) */
  }
}
</script>

<style scoped>

</style>
