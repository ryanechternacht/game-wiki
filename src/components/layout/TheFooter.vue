<template>
  <div class="footer">
    <div class="container">
      <span>I'm a footer</span>
    </div>
  </div>
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
.footer {
  background-color: #f8f8f8;
  margin-top: 1rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
</style>
