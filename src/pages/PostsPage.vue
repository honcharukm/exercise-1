<template>
  <div>
    <header class="filters">
      Count Articles:
      <custom-select
        :options="[10, 20, 30]"
        :current-value="getLimit"
        :handle-change="changeLimit"
      />
      Sort by: 
      <custom-select
        :options="['asc', 'desc']"
        :current-value="getSort"
        :handle-change="changeSort"
      />
    </header>
    <post-card
      v-for="post in allPosts"
      :key="post.id"
      :post="post"
      :readMore="true"
    />
    <posts-paginate :pageCount="getPageCount" :changePage="changePage"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostCard from "../components/PostCard.vue";
import CustomSelect from "../components/CustomSelect.vue";
import PostsPaginate from '../components/PostsPaginate.vue'

export default {
  name: "PostsPage",
  components: { PostCard, CustomSelect, PostsPaginate },
  computed: {
    ...mapGetters(["allPosts", "getLimit", "getSort", "getPageCount"]),
  },
  methods: {
    changeLimit(e) {
      this.$store.commit("updateLimit", e.target.value);
      this.fetchPosts();
    },
    changeSort(e) {
      this.$store.commit("updateSort", e.target.value);
      this.fetchPosts();
    },
    changePage(page) {
      this.$router.push(`/page/${page}`);
      this.$store.commit("updateCurrentPage", page);
      this.fetchPosts()
    },
    ...mapActions(["fetchPosts"]),
  },
  async mounted() {
    const { page } = this.$route.params;
    if (page !== undefined) {
      this.$store.commit("updateCurrentPage", page);
    }
    this.fetchPosts();
  },
};
</script>

<style lang="scss">
.filters {
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding: 10px 0;
  align-items: center;
}
</style>