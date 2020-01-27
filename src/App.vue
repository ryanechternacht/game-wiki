<template>
  <div id="app">
    <the-header />

    <div class="container main-view">
      <router-view />
    </div>

    <the-footer />
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";
import TheFooter from "@/components/layout/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style>
.main-view {
  margin-top: 20px;
}
</style>
