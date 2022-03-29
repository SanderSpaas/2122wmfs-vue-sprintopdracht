<template>
  <ul class="no-style">
    <li v-for="w in works" :key="w.workid">
      <LibTeaser :book="w"></LibTeaser>
    </li>
  </ul>
</template>
<script>
import LibTeaser from "../Molecules/LibTeaser.vue";
export default {
  props: { works: { type: Array, required: true } },
  components: { LibTeaser },
};
</script>
<style scoped lang="scss">
// @import "../../assets/mixins.scss";
// @import "../../assets/colors.scss";
ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 1em;
  margin-top: 3em;
}
ul li {
  display: list-item;
  list-style: none;
  gap: 2em;
  width: 70%;
  padding: 5px 10px;
  color: white;
  background-color: rgb(40, 44, 52);
  border: 1px solid rgb(98, 108, 128);
}
.selected{
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(156, 172, 204);
  color: rgb(32, 36, 44);
}
</style>
