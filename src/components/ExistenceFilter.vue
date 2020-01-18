<template>
  <div class="row">
    <span class="col-3">{{description}}</span>
    <span class="col-3">
      <b-button-group>
        <b-button @click="addHasFilter()" variant="outline-primary">Yes</b-button>
        <b-button @click="addDoesntHaveFilter()" variant="outline-primary">No</b-button>
      </b-button-group>
    </span>
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
    addHasFilter() {
      this.$emit("add-filter", { has: { tag: this.type } });
    },
    addDoesntHaveFilter() {
      this.$emit("add-filter", { doesntHave: { tag: this.type } });
    }
  }
};
</script>