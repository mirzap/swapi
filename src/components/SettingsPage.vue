<template>
  <div class="settings">
    <div class="card mb-4">
      <div class="card-body">
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
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-body">
        <h5 class="title" v-localize="{i: 'settings.units.title'}"></h5>

        <p v-localize="{i: 'settings.units.text'}"></p>
        <button type="button" class="btn btn-sm btn-outline-secondary active" v-localize="{i: 'settings.units.metric'}"></button>
        <button type="button" class="btn btn-sm btn-outline-secondary" v-localize="{i: 'settings.units.imperial'}"></button>
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-body">
        <h5 class="title" v-localize="{i: 'settings.storage.title'}"></h5>

        <p v-localize="{i: 'settings.storage.text'}"></p>

        <div class="storage-radio-btn custom-control custom-radio custom-control-inline">
          <input type="radio" id="storageYes" name="storage" class="custom-control-input storage-input">
          <label class="custom-control-label storage-label" for="storageYes" v-localize="{i: 'settings.storage.labels.yes'}"></label>
        </div>
        <div class="storage-radio-btn custom-control custom-radio custom-control-inline">
          <input type="radio" id="storageNo" name="storage" class="custom-control-input storage-input" checked>
          <label class="custom-control-label storage-label" for="storageNo" v-localize="{i: 'settings.storage.labels.no'}"></label>
        </div>
      </div>
    </div>
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
.storage-radio-btn {
  > .storage-input {
    &:checked {
      ~ .storage-label {
        &:before {
          background: #000!important;
        }
        &:after {
          background: #FFD700;
          border-radius: 50%;
          width: 8px;
          height: 8px;
          margin-top: 4px;
          margin-left: 4px;
        }
      }
    }
  }
}
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
      border-bottom: 2px solid #FFD700;
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
