<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">Game Wiki</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-options"
        aria-controls="navbar-options"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar-options">
        <ul class="navbar-nav">
          <li class="nav-item" :class="{active: area == 'card-list'}">
            <router-link class="nav-link" to="/">Card List</router-link>
          </li>
          <li class="nav-item" :class="{active: area == 'faq'}">
            <router-link class="nav-link" to="/faq">FAQ</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      area: "card-list"
    };
  },
  watch: {
    $route: "updateCurrentArea"
  },
  methods: {
    updateCurrentArea() {
      this.area = this.$route.matched.length && this.$route.matched[0].name;
    }
  }
};
</script>

<style>
</style>
