<template>
  <div>
    <div class="float-right">
      <b-button variant="primary" @click="routeToNewFaqPage">New Entry</b-button>
    </div>
    <faq-search initialSearch @search="search" />
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
    },
    routeToNewFaqPage() {
      this.$router.push({
        name: "faq-page-new"
      });
    }
  }
};
</script>