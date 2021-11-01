<template>
  <article class="post">
      <header>
          <button @click="goBack" v-if="!readMore">Go back</button>
      </header>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <footer>
        <div class="post__author">
          Author: <b>{{ post.user.name }}</b>
        </div>
        <div class="post__btns">
          <button class="btn post__btn-read" v-if="readMore">
              <router-link :to="readMoreLink">Read more</router-link>
          </button>
        </div>
      </footer>
    </article>
</template>

<script>
export default {
    name: 'PostCard',
    props: ['post', 'readMore'],
    computed: {
        readMoreLink() {
            return `/post/${this.post.id}`
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style>
.post {
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
}
.post + .post {
  margin-top: 10px;
}
.post header {
  padding: 10px;
}
.post h1 {
  margin: 9px 0 7px;
  padding: 0 20px;
  font-size: 22px;
  line-height: 1.3em;
}
.post p {
  padding: 0 20px;
  font-size: 16px;
  line-height: 24px;
}
.post footer {
  padding: 0 20px 16px;
  margin: 11px 0 0;
  color: #595959;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.post__author {
  font-size: 15px;
}
.btn {
  font-size: 12px;
  border-radius: 8px;
  background: transparent;
}
.post__btn-read {
  border-color: cornflowerblue;
  color: cornflowerblue;
  box-shadow: none;
}
</style>