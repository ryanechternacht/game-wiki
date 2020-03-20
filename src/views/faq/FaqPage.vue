<template>
  <div>
    <div class="float-right">
      <b-button variant="outline-primary" @click="edit">
        <b-icon icon="pencil" />
      </b-button>
    </div>

    <h2>{{faq.title}}</h2>

    <h4>Tags</h4>
    <ul>
      <li v-for="(t, i) in faq.tags" :key="i">{{t}}</li>
    </ul>

    <h4>Body</h4>
    <span v-html="faq.body"></span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["id"],
  created() {
    this.fetchFaq({ id: this.id });
  },
  computed: {
    ...mapGetters("faq", ["getFaq"]),
    faq() {
      return this.getFaq(this.id);
    }
  },
  methods: {
    edit() {
      this.$router.push({
        name: "faq-page-edit",
        params: { id: this.id }
      });
    },
    ...mapActions("faq", ["fetchFaq"])
  }
};
</script>
