<template>
  <div id="app">
    <main>
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
    }
  },
  mounted() {
    this.$store.dispatch('fetchArticle')
  }
}
</script>

<style>
body {
  margin: 0;
  background: #efeded;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #efeded;
}
main {
  text-align: center;
  margin-top: 40px;
}
</style>
