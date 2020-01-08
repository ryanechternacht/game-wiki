<template>
  <span class="chip">{{displayText}}</span>
</template>

<script>
export default {
  name: "filter-chip",
  props: ["filter"],
  computed: {
    displayText() {
      if (this.filter.category) {
        return `${this.filter.category.tag}: ${this.filter.category.value}`;
      } else if (this.filter.has) {
        return `Has ${this.filter.has.tag}`;
      } else if (this.filter.doesntHave) {
        return `Doesn't Have ${this.filter.doesntHave.tag}`;
      }
    }
  },
  methods: {}
};
</script>

<style scoped>
/* wripped striaght from materialize 0.100 */
.chip {
  display: inline-block;
  height: 32px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
  line-height: 32px;
  padding: 0 12px;
  border-radius: 16px;
  background-color: #e4e4e4;
  margin-bottom: 5px;
  margin-right: 5px;
}
</style>