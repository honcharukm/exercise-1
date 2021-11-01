<template>
  <post-card :post="getPost" :readMore="false"/>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PostCard from '../components/PostCard.vue'

export default {
    name: "PostPage",
    components: { PostCard },
    computed: {
        ...mapGetters(['getPost'])
    },
    methods: {
        ...mapActions(['fetchPost'])
    },
    async mounted() {
        const { id } = this.$route.params
        await this.fetchPost(id)
    }
}
</script>

<style>

</style>