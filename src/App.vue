<template>
  <main class="container">
    <router-view />
  </main>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f2f2f2;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  width: 640px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 10px 0;
}
</style>