<template>
  <div id="app">
    <base-layout>
      <template slot="header">
        <img src="./assets/logo.png">
      </template>

      <template slot="content">
        <ul class="nav">
          <li class="nav-item">
            <router-link :to="{ name: 'residents' }" class="nav-link">
              Residents
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'settings' }" class="nav-link">
              Settings
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'demo' }" class="nav-link">
              Demo
            </router-link>
          </li>
        </ul>
        <router-view/>
      </template>
    </base-layout>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

// Components
import BaseLayout from '@/components/Layout'

@Component({
  name: 'App',
  components: { BaseLayout }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '~@/assets/scss/style';

#app {
  .header {
    margin: 25px auto;
  }
  .content {
    border: 1px solid #d8d8d8;
    padding: 20px;
    background: #FFF;
    box-shadow: 0 2px 6px rgba(0,0,0,.04);
    border-radius: 6px;
    min-height: 300px;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
