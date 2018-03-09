<template>
  <div class="settings">
    <h5 class="title" v-localize="{i: 'settings.language.title'}"></h5>

    <p v-localize="{i: 'settings.language.text'}"></p>

    <ul class="flags">
      <li :class="{active: language === 'en'}" @click="setLanguage('en')">
        <icon name="en" :original="true" width="32" height="32" :fill="false"/>
      </li>
      <li :class="{active: language === 'bs'}" @click="setLanguage('bs')">
        <icon name="bs" :original="true" width="32" height="32" :fill="false"/>
      </li>
    </ul>

    <h5 class="title" v-localize="{i: 'settings.units.title'}"></h5>

    <p v-localize="{i: 'settings.units.text'}"></p>
    <button type="button" class="btn btn-sm btn-outline-secondary active" v-localize="{i: 'settings.units.metric'}"></button>
    <button type="button" class="btn btn-sm btn-outline-secondary" v-localize="{i: 'settings.units.imperial'}"></button>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import {mapGetters} from 'vuex'

@Component({
  name: 'SettingsPage',
  computed: {
    ...mapGetters({
      language: 'getLanguage'
    })
  },
  methods: {
    setLanguage (lang) {
      this.$locale({l: lang})
      this.$store.dispatch('setLanguage', lang)
    }
  }
})
export default class SettingsPage extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title {
  text-align: left;
  border-bottom: 1px solid rgba(0,0,0,.089);
  padding-bottom: 6px;
  margin-bottom: 25px;
}
ul.flags {
  display: inline-block;
  li {
    line-height: 0;
    cursor: pointer;
    &.active {
      border-bottom: 1px solid #0074D9;
      &:hover,&:focus {
        border-color: #000066;
      }
    }
  }
}
button {
  .active {
    background: #6c757d;
    border-color: #6c757d;
  }
}
  .hello {
    h1 {
      color: #2c3e50;
    }
  }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
