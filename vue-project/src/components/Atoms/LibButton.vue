<template>
  <section>
    <div class="tags">
      <button
        class="tag"
        v-for="subject in subjects.slice(0, 4)"
        :key="subject.id"
      >
        <slot
          ><p v-on:click="$emit('update:{{subject}}')">
            {{ subject }}
          </p></slot
        >
      </button>
    </div>
    <button class="tag">
      <slot>Show Details</slot>
    </button>
  </section>
</template>

<script>
// import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  props: { subjects: { type: Object, required: true } },

  methods: {
    ...mapActions("", ["SetSubject"]),
    ...mapActions(["SetSubject"]),
  },
};
</script>
<style scoped lang="scss">
// @import "../../assets/colors.scss";
.tags {
  display: flex;
  padding: 0.6em;
}
.tag {
  background-color: rgb(40, 44, 52);
  border: 1px solid rgb(156, 172, 204);
  border-radius: 15px;
  color: rgb(156, 172, 204);
  width: fit-content;
  padding: 0.3em;
  padding-left: 1.3em;
  padding-right: 1.3em;
  margin-right: 1em;
}
</style>
