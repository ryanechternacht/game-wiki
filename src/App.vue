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
    <div id="nav"></div>
    <router-view />
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 10px;
  margin-left: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
