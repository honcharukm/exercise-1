import Vue from 'vue'
import VueRouter from 'vue-router'
import PostsPage from './pages/PostsPage.vue'
import PostPage from './pages/PostPage.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: PostsPage },
    { path: '/page/:page', component: PostsPage },
    { path: '/post/:id', component: PostPage }
]

export default new VueRouter({
    routes,
    mode: 'history'
})