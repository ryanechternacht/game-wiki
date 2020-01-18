<template>
  <div>
    <b-form inline>
      <label class="mr-4">{{description}}</label>
      <b-button-group>
        <b-button @click="addHasFilter()" variant="outline-primary">Yes</b-button>
        <b-button @click="addDoesntHaveFilter()" variant="outline-primary">No</b-button>
      </b-button-group>
    </b-form>
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