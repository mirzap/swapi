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
        <button type="button" class="btn btn-sm btn-outline-secondary" :class="{active: unitSystem === 'metric'}"
                @click="setUnitSystem('metric')"
                v-localize="{i: 'settings.units.metric'}">
        </button>
        <button type="button" class="btn btn-sm btn-outline-secondary" :class="{active: unitSystem === 'imperial'}"
                @click="setUnitSystem('imperial')"
                v-localize="{i: 'settings.units.imperial'}">
        </button>
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-body">
        <h5 class="title" v-localize="{i: 'settings.storage.title'}"></h5>

        <p v-localize="{i: 'settings.storage.text'}"></p>

        <button type="button" class="btn btn-danger"
                v-localize="{i: 'settings.storage.confirmation.button'}"
                @click="showConfirmation(true)">
        </button>

        <div class="delete-confirmation" v-if="confirmation">
          <p class="font-weight-bold" v-localize="{i: 'settings.storage.confirmation.text'}"></p>
          <div class="delete-btn-group">
            <button type="button" class="btn btn-danger"
                    v-localize="{i: 'settings.storage.confirmation.yes'}"
                    @click="clearLocalStorage()">
            </button>
            <button type="button" class="btn btn-success"
                    v-localize="{i: 'settings.storage.confirmation.cancel'}"
                    @click="showConfirmation(false)">
            </button>
          </div>
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
      language: 'getLanguage',
      unitSystem: 'getUnitSystem'
    })
  },
  methods: {
    setLanguage (lang) {
      this.$locale({l: lang})
      this.$store.dispatch('setLanguage', lang)
    },
    setUnitSystem (system) {
      this.$store.dispatch('setUnitSystem', system)
    },
    showConfirmation (show) {
      this.confirmation = show
    },
    clearLocalStorage () {
      // Better way would be to reset the state via mutation to it's default values
      // But this will do fine for the test task :)
      window.localStorage.clear()
      this.confirmation = false
    }
  }
})
export default class SettingsPage extends Vue {
  confirmation = false
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$red: #e74c3c;
$green: #27ae60;

.delete-confirmation {
  margin: 20px auto;
  padding: 20px 10px;
  border: 1px solid $red;
  background: lighten($red, 36%);
  border-radius: 6px;
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
  &.btn-danger {
    background-color: $red;
  }
  &.success {
    background-color: $green;
    border-color: darken($green, 15%);

    &:hover {
      background-color: darken($green, 7%);
      border-color: darken($green, 3%);
    }
  }
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
