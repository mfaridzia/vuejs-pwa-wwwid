<template>
  <div id="app">
    <header>
      <span>Simple PWA App</span>
    </header>
    <main>
      <div class="wrapper">
        <div class="books">
          <book v-for="list in lists" :key="list.imageUrl" :list="list"></book>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import data from './db.json'
import Book from './components/Book'

export default {
  name: 'app',
  data() {
    return {
      lists: []
    }
  },
  created() {
    this.lists = data
  },
  components: {
    Book
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
.books {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
  margin:0px 10px;
}

/*RESPONSIVE*/
@media only screen and (min-width: 350px) {
  .books {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media only screen and (min-width: 500px) {
  .books {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (min-width: 700px) {
  .books {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media only screen and (min-width: 900px) {
  .books {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media only screen and (min-width: 1100px) {
  .books {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
