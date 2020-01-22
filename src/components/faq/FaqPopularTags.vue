<template>
  <div class="inline small">
    <span class="label">Popular Tags:</span>
    <b-link v-for="t in tags" :key="t" @click="$emit('tag-selected', t)" class="ml-2">{{t}}</b-link>
  </div>
</template>

<script>
export default {
  name: "faq-popular-tags",
  components: {},
  props: ["tags"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.inline {
  display: inline;
}

.label {
  color: #444;
  font-style: italic;
}
</style>