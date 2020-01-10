<template>
  <div style="margin-left: 40px">
    <div class="float-right">
      <button>new entry</button>
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