export default {
    state: {
        posts: [],
        post: {},
        totalCountPosts: 0,
        currentPage: 1,
        limit: 10,
        sort: 'asc',
        pageCount: 1
    },
    getters: {
        allPosts(state) {
            return state.posts
        },
        getLimit(state) {
            return state.limit
        },
        getSort(state) {
            return state.sort
        },
        getPost(state) {
            return state.post
        },
        getPageCount(state) {
            return state.pageCount
        }
    },
    actions: {
        async fetchPosts(ctx) {
            const { currentPage, limit, sort } = ctx.state
            const fetchUrl = 
                `https://jsonplaceholder.typicode.com/posts?_expand=user&_limit=${limit}&_page=${currentPage}&_sort=id&_order=${sort}`
            
            const res = await fetch(fetchUrl)
            const posts = await res.json()
            const totalPosts = await res.headers.get('X-Total-Count')
            const pageCount = Math.floor(totalPosts / limit)

            ctx.commit('updatePosts', posts)
            ctx.commit('updateTotalCountPosts', totalPosts)
            ctx.commit('updatePageCount', pageCount)
        },
        async fetchPost(ctx, postId) {
            const fetchUrl = 
                `https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user`

            const res = await fetch(fetchUrl)
            const post = await res.json()

            ctx.commit('updatePost', post)
        }
    },
    mutations: {
        updatePosts(state, payload) {
            state.posts = payload
        },
        updateTotalCountPosts(state, payload) {
            state.totalCountPosts = payload
        },
        updateLimit(state, payload) {
            state.limit = payload
        },
        updateSort(state, payload) {
            state.sort = payload
        },
        updatePost(state, payload) {
            state.post = payload
        },
        updatePageCount(state, payload) {
            state.pageCount = payload
        },
        updateCurrentPage(state, payload) {
            state.currentPage = payload
        }
    }
}