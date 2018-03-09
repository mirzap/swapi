<template>
  <div class="settings">
    <h5 class="title">Language</h5>

    <p>Here you can easily change your language preference.</p>

    <ul class="flags">
      <li class="active">
        <icon name="en" :original="true" width="32" height="32" :fill="false"/>
      </li>
      <li>
        <icon name="bs" :original="true" width="32" height="32" :fill="false"/>
      </li>
    </ul>

    <h5 class="title">Units</h5>

    <p>Specify the default unit system for the app.</p>
    <button type="button" class="btn btn-sm btn-outline-secondary active">Metric</button>
    <button type="button" class="btn btn-sm btn-outline-secondary">Imperial</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
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
