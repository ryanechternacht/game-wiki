<template>
  <div>
    <b-form @submit.prevent="submit" inline>
      <b-input placeholder="search" v-model="term" class="mr-4" />
      <b-button @click="submit">Search</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "faq-search",
  props: ["initialSearch"],
  data() {
    return {
      term: this.initialSearch
    };
  },
  methods: {
    submit() {
      this.$emit("search", this.term);
    }
  }
};
</script>