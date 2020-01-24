<template>
  <div>
    <b-form-group label-for="title" label="Title">
      <b-form-input id="title" v-model="faq.title" />
    </b-form-group>

    <b-form-group label-for="tags" label="Tags">
      <b-form-tags id="tags" v-model="faq.tags" class="mb-2" remove-on-delete />
    </b-form-group>

    <b-form-group label-for="body" label="Body">
      <editor
        initial-value
        api-key="2htrrda1ywukt91mvkpsd7m0j884up00dz8u5jrllk8cf325"
        id="body"
        :init="{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap',
            'searchreplace visualblocks code fullscreen',
            'print preview anchor insertdatetime media',
            'paste code help wordcount table'
          ],
          toolbar:
            `undo redo | formatselect | bold italic |
            alignleft aligncenter alignright |
            bullist numlist outdent indent | help`
        }"
      />
    </b-form-group>

    <b-button class="mt-4" @click="save" variant="primary">Save</b-button>
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["id"],
  components: {
    Editor
  },
  created() {
    this.loadFaq();
  },
  watch: {
    $route: "loadFaq"
  },
  data() {
    return {
      faq: null
    };
  },
  computed: {
    ...mapGetters("faq", ["getFaq"]),
    title() {
      return this.faq ? this.faq.title : "";
    }
  },
  methods: {
    ...mapActions("faq", ["saveFaq"]),
    save() {
      this.saveFaq({ faq: this.faq, id: this.id });
    },
    loadFaq() {
      let faq = this.getFaq(this.id);
      this.faq = faq || this.makeNewFaq();
    },
    makeNewFaq() {
      return {
        faq: {
          title: "",
          tags: [],
          body: ""
        }
      };
    }
  }
};
</script>
