<template>
  <div class="card">
    <!-- <h2>{{ book[0].title }}</h2> -->
    <div class="dates">
      <!-- <img src="{{cover}}" /> -->
    </div>
    <p>test</p>
    <!-- <ul id="example-1">
      <li v-for="author in book.authors" :key="author.id">
        {{ author.name }},
      </li>
    </ul> -->
    <!-- <LibButton :subjects="book.subject"> </LibButton> -->
  </div>
</template>
<script>
import LibButton from "../Atoms/LibButton.vue";
export default {
  setup() {},
  props: { book: { type: Object, required: true } },
  components: {
    LibButton,
  },
  computed: {
    cover() {
      let url = `https://covers.openlibrary.org/b/id/${this.detail.covers[0]}-M.jpg`;
      return encodeURI(url);
    },
  },
};
</script>

<style scoped lang="scss">
h3 {
  font-weight: bolder;
}
</style>
