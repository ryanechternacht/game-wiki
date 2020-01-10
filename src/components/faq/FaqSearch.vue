<template>
  <div>
    <form @submit.prevent="$emit('search', term)">
      <input placeholder="search" v-model="term" />
      <input type="submit" content="Search" />
    </form>
  </div>
</template>

<script>
export default {
  name: "faq-search",
  props: ["initialSearch"],
  data() {
    return {
      term: this.initialSearch
    };
  }
};
</script>