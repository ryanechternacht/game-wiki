<template>
  <div>
    <h2>Home</h2>

    <ul>
      <li v-for="f in faqs" :key="f.id">
        <router-link :to="{ name: 'faq-page', params: {id: f.id}}">{{f.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  created() {
    this.fetchFaqOverviewList();
  },
  computed: {
    ...mapGetters("faq", { faqs: "faqOverviewList" })
  },
  methods: {
    ...mapActions("faq", ["fetchFaqOverviewList"])
  }
};
</script>