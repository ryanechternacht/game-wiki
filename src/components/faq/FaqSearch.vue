<template>
  <div>
    <b-form @submit.prevent="submit" inline>
      <b-input placeholder="search" v-model="term" class="mr-4" />
      <b-button @click="submit" variant="primary">Search</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "faq-search",
  props: ["searchTerm"],
  data() {
    return {
      term: this.searchTerm
    };
  },
  watch: {
    searchTerm(term) {
      this.term = term;
      this.submit();
    }
  },
  methods: {
    submit() {
      this.$emit("search", this.term);
    }
  }
};
</script>