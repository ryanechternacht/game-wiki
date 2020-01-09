<template>
  <div>
    <faq-header />

    <hr />

    <router-view></router-view>
  </div>
</template>

<script>
import FaqHeader from "./FaqHeader";

export default {
  components: {
    FaqHeader
  }
};
</script>