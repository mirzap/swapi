<template functional>
  <ul class="nav mb-4">
    <li class="nav-item">
      <router-link :to="{ name: 'residents' }" class="nav-link">
        <span v-localize="{i: 'navigation.residents'}"></span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{ name: 'settings' }" class="nav-link">
        <span v-localize="{i: 'navigation.settings'}"></span>
      </router-link>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.nav {
  border-bottom: 1px solid rgba(0,0,0,.14);
  .nav-link {
    color: rgba(0,0,0,.65);

    &.active {
       font-weight: 700;
       color: rgba(0,0,0,.8);
    }
  }
  .nav-item:first-child a {
    padding-left: 0;
  }
}
</style>
