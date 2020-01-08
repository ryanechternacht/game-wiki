<template>
  <div>
    <div class="filter-list">
      Filters:
      <filter-chip v-for="(f, i) in filters" :filter="f" :key="i" />
    </div>
  </div>
</template>

<script>
import FilterChip from "./FilterChip";

export default {
  name: "filter-list",
  components: {
    FilterChip
  },
  props: ["filters"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
</style>