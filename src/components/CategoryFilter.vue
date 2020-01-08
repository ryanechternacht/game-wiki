<template>
  <div>
    <select v-model="selected">
      <option v-for="v in values" :key="v">{{v}}</option>
    </select>
    <button @click="addFilter(selected)">Add Filter</button>
  </div>
</template>

<script>
export default {
  name: "category-filter",
  props: ["category", "values"],
  data() {
    return {
      selected: null
    };
  },
  methods: {
    addFilter(value) {
      this.$emit("add-filter", { category: { tag: this.category, value } });
    }
  }
};
</script>