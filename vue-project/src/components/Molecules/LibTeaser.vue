<template>
  <div
    class="card"
    @click="this.IsSelected = true"
    v-bind:class="{ selected: IsSelected }"
  >
    <h3>{{ book.title }}</h3>
    <div class="dates">
      <p>test</p>
    </div>
    <ul id="example-1">
      <li v-for="author in book.authors" :key="author.id">
        {{ author.name }},
      </li>
    </ul>
    <LibButton :subjects="book.subject" @update:subject="subject"> </LibButton>
  </div>
</template>
<script>
import LibButton from "../Atoms/LibButton.vue";
export default {
  setup() {
    // return { toGhentTime, ellipsis };
  },
  props: { book: { type: Object, required: true } },
  components: {
    LibButton,
  },
  data() {
    return {
      IsSelected: false,
      subject: "",
    };
  },
};
</script>

<style scoped lang="scss">
// @import "../../assets/colors.scss";
h3 {
  font-weight: bolder;
}
</style>
