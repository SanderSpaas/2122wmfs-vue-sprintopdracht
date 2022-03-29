<script>
import LibList from "./components/Organisms/LibList.vue";
import LibDetail from "./components/Organisms/LibDetail.vue";
export default {
  methods: {
    fetchList() {
      this.isLoading = true;
      fetch(this.url)
        .then((res) => res.json())
        .then((data) => {
          this.isLoading = false;
          this.works = data.works;
          this.work_count = data.work_count;
        })
        // .then(this.setURLSearchParams())
        .catch((error) => (this.error = error));
    },
    fetchDetail() {
      this.isLoading = true;
      fetch(this.url2, {
        headers: {
          // Authorization: `apikey ${import.meta.env.VITE_API_KEY}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.isLoading = false;
          this.works = data.works;
          this.work_count = data.work_count;
        })
        // .then(this.setURLSearchParams())
        .catch((error) => (this.error = error));
    },
  },
  computed: {
    url() {
      let url = `https://openlibrary.org/subjects/${this.subject
        .toLowerCase()
        .replaceAll(" ", "_")}.json`;
      return encodeURI(url);
    },
    url2() {
      let url = `https://openlibrary.org${this.key}.json`;
      return encodeURI(url);
    },
  },
  mounted() {
    console.log("Retrieving the first data...");
    this.fetchList();
  },
  data() {
    return {
      work_count: null,
      works: null,
      isLoading: "false",
      error: "Geen resultaten gevonden... (● ︵ ●)",
      key: "",
      subject: "computers",
    };
  },
  components: { LibList, LibDetail },
};
</script>

<template>
  <header><h1>Sander's Book Treasure</h1></header>
  <!-- <main> -->
  <div class="visually-hidden">
    <h2>Results</h2>
    <LibList :works="works" v-if="work_count > 0" />
    <p v-else-if="error" class="error">
      {{ error }}
    </p>
    <!-- {{ records }} -->
  </div>
  <div class="detail">
    <LibDetail :works="works" v-if="work_count > 0" />
  </div>
  <div v-if="isLoading === true" class="loading">...Loading</div>
  <!-- </main> -->
</template>

<style lang="scss">
@import "./assets/base.css";
</style>
