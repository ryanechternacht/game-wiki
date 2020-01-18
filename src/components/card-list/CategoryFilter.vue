<template>
  <div>
    <b-form inline>
      <label class="mr-4">{{description}}:</label>
      <b-form-select v-model="selected" :options="formattedOptions" class="mr-4" />
      <b-button variant="outline-primary" @click="addFilter(selected)">Add Filter</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "category-filter",
  props: ["category", "values", "description"],
  data() {
    return {
      selected: this.values && this.values.length && this.values[0]
    };
  },
  computed: {
    formattedOptions() {
      return this._.map(this.values, v => ({ text: v, value: v }));
    }
  },
  methods: {
    addFilter(value) {
      this.$emit("add-filter", { category: { tag: this.category, value } });
    }
  }
};
</script>