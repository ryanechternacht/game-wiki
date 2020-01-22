<template>
  <div>
    <faq-header :initialSearchTerm="initialSearchTerm" />

    <hr />

    <router-view></router-view>
  </div>
</template>

<script>
import FaqHeader from "./FaqHeader";

export default {
  props: ["initialSearchTerm"],
  components: {
    FaqHeader
  }
};
</script>