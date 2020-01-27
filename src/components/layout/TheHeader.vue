<template>
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
</template>

<script>
export default {
  created() {
    this.updateCurrentArea();
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

<style scoped>
</style>
