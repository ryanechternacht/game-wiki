<template>
  <div class="row">
    <span class="col-3">{{description}}:</span>
    <span class="col-6">
      <b-form-select v-model="selected" :options="formattedOptions" />
    </span>
    <span class="col-3">
      <b-button variant="outline-primary" @click="addFilter(selected)">Add Filter</b-button>
    </span>
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