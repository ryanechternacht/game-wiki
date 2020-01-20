<template>
  <div>
    <editor
      initialValue="<p>Initial editor content</p>"
      apiKey="2htrrda1ywukt91mvkpsd7m0j884up00dz8u5jrllk8cf325"
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
          'undo redo | formatselect | bold italic | \
          alignleft aligncenter alignright | \
          bullist numlist outdent indent | help'
      }"
    />
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "the-faq",
  components: {
    Editor
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>