<template>
  <div>
    {{description}}
    <button @click="addHasFilter(true)">Yes</button>
    <button @click="addDoesntHaveFilter(false)">No</button>
  </div>
</template>

<script>
export default {
  name: "category-filter",
  props: ["description", "type"],
  data() {
    return {
      selected: null
    };
  },
  methods: {
    addHasFilter(value) {
      this.$emit("add-filter", { has: { tag: this.type } });
    },
    addDoesntHaveFilter(value) {
      this.$emit("add-filter", { doesntHave: { tag: this.type } });
    }
  }
};
</script>