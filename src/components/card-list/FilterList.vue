<template>
  <div class="inline">
    <filter-chip
      v-for="(f, i) in filters"
      :filter="f"
      :key="i"
      @remove-filter="$emit('remove-filter', i)"
    />
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
.inline {
  display: inline;
}
</style>