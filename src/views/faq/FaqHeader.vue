<template>
  <div>
    <div class="float-right">
      <b-button variant="primary" disabled>New Entry</b-button>
    </div>
    <faq-search initialSearch="hello" @search="search" />
    <div>Tags: ... ... ...</div>
  </div>
</template>

<script>
import FaqSearch from "@/components/faq/FaqSearch";
export default {
  components: {
    FaqSearch
  },
  methods: {
    search(term) {
      this.$router.push({
        name: "faq-search",
        params: { term }
      });
    }
  }
};
</script>