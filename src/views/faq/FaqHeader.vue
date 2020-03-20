<template>
  <div>
    <div class="float-right">
      <b-button variant="primary" @click="routeToNewFaqPage">New Entry</b-button>
    </div>
    <faq-search :searchTerm="searchTerm" @search="search" />
    <div class="mt-2">
      <faq-popular-tags @tag-selected="searchTag" :tags="mostPopularTags" />
    </div>
  </div>
</template>

<script>
import FaqSearch from "@/components/faq/FaqSearch";
import FaqPopularTags from "@/components/faq/FaqPopularTags";
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["initialSearchTerm"],
  components: {
    FaqSearch,
    FaqPopularTags
  },
  data() {
    return {
      searchTerm: this.initialSearchTerm
    };
  },
  created() {
    this.fetchMostPopularTags();
  },
  computed: {
    ...mapGetters("faq", ["mostPopularTags"])
  },
  methods: {
    search(term) {
      this.$router.push({
        name: "faq-search-results",
        params: { term }
      });
    },
    routeToNewFaqPage() {
      this.$router.push({
        name: "faq-page-new"
      });
    },
    searchTag(tag) {
      this.searchTerm = tag;
    },
    ...mapActions("faq", ["fetchMostPopularTags"])
  }
};
</script>
