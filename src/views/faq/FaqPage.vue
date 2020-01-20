<template>
  <div>
    <h2>{{faq.title}}</h2>

    <h4>Tags</h4>
    <ul>
      <li v-for="(t, i) in faq.tags" :key="i">{{t}}</li>
    </ul>

    <h4>Body</h4>
    <p>{{faq.body}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["id"],
  created() {
    // fetch data?
  },
  computed: {
    ...mapGetters(["getFaq"]),
    faq() {
      return this.getFaq(this.id);
    }
  },
  methods: {}
};
</script>
