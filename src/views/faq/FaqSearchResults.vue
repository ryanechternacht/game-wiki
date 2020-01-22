<template>
  <div>
    <h2>Results for {{term}}:</h2>

    <ol>
      <li v-for="f in searchedFaqs" :key="f.id">
        <router-link :to="{ name: 'faq-page', params: { id: f.id } }">{{f.title}}</router-link>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["term"],
  created() {
    this.search();
  },
  computed: {
    ...mapState({
      searchedFaqs: state => state.faqSearch
    })
  },
  methods: {
    ...mapActions(["searchFaq"]),
    search() {
      this.searchFaq({ term: this.term });
    }
  },
  watch: {
    $route: "search"
  }
};
</script>