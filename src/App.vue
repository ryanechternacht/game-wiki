<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/">Game Wiki</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" :class="{active: area == 'card-list'}">Card List</b-nav-item>
          <b-nav-item to="/faq" :class="{active: area == 'faq'}">FAQ</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="container main-view">
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
.main-view {
  margin-top: 20px;
}
</style>
