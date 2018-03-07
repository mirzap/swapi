<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="header col-md-8 offset-md-2">
        <slot name="header"></slot>
      </div>
    </div>
    <div class="row">
      <div class="content col-md-8 offset-md-2">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout'
}
</script>

<style scoped>

</style>
