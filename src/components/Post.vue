<template>
  <div id="post">
    <header>
      <ul>
        <li>
          <router-link to="/" class="brand"> WWWID - MEDIUM </router-link>
        </li>
        <li>
          <router-link to="/"> Home </router-link>
        </li>
        <li>
          <router-link to="/about"> About </router-link>
        </li>
        <!-- <li>
          <router-link to="/" class="built-vuejs"> Built with Vue.js </router-link>
        </li> -->
      </ul>
    </header>

    <div class="wrapper-book" v-for="post in posts" :key="post.guid">
      <div class="wrap-img">
        <img v-lazy="post.thumbnail" alt="post.title" class="img">
      </div>
      <div class="content-article">
        <div v-if="post.guid === 'https://medium.com/p/c1e27e7e2742'">
          <p class="title" @click="detailArticle(post)"> <strong> {{ post.title }} </strong> </p>
          <p class="desc"> {{ post.description | regexContentUnik }} .. </p>
          <p class="author-pubdate"> <u> {{ post.author }} </u> at <u> {{ post.pubDate }} </u> </p>
        </div>
        <div v-else>
          <p class="title" @click="detailArticle(post)"> <strong> {{ post.title }} </strong> </p>
          <p class="desc"> {{ post.description | regexContent }} .. </p>
          <p class="author-pubdate"> <u> {{ post.author }} </u> at <u> {{ post.pubDate }} </u> </p>
        </div>
        <div class="category">
          <span v-for="(cat, index) in post.categories" :key="index" class="category-list">
            <router-link :to="`/category/${cat}`" class="cat-a"> # {{ cat }} </router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
    }
  },
  filters: {
    regexContent: function (value) {
      if (!value) return ''
        value = value.replace(/(<([^>]+)>)/ig,"").substr(1, 150)
      return value
    },
    regexContentUnik: function (value) {
      if (!value) return ''
        value = value.replace(/(<([^>]+)>)/ig,"").substr(80, 56)
      return value
    }
  },
  mounted() {
    this.$store.dispatch('fetchArticle')
  },
  computed: {
    posts () {
      return this.$store.getters.allArticles
    }
  },
  methods: {
    detailArticle(data) {
      this.$store.commit('setArticle', data)
      this.$router.replace({ 'path': 'post/article-detail' })
    }
  }
}
</script>

<style scoped>
.fade-enter, .fade-leave-to {
  opacity: 0;
}

header {
  position: fixed;
  top:0;
  width: 100%;
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #1f293d;
  color: #ffffff;
  margin-top: 0px;
  text-align: left;
}

header ul {
  list-style: none;
  margin-left: 125px;
}
header ul li {
  display: inline-block;
}
header a {
  text-decoration: none;
  color: #fff;
  display: block;
  padding: 5px 20px;
  font-size: 14px;
}
header a:hover {
  color: #ecf0f1;
}
.brand {
  font-weight: bold;
  color: #ecf0f1;
}

#post {
  margin-top: 85px;
}
.wrapper-book {
  width: 70%;
	display: grid;
  grid-template-columns: 150px 1fr;
  grid-gap: 1em;
  margin: 15px auto;
  background: #fff;
  text-align: left;
  height: 0 auto;
}
.wrap-img {
  width: 100%;
}
.built-vuejs {
  position: relative;
  left: 0px;
  background: #fff;
  color: #000;
  padding: 5px;
  font-weight: bold;
}
.content-article {
  width: 100%;
}
.title {
  margin-left:30px;
  cursor: pointer;
}
.desc {
  margin-left:30px;
}
.author-pubdate {
  font-size: 12px;
  margin-left:30px;
}
.img {
  display: block;
  width: 100%;
  height: 120px;
  border: 1px solid #f4f5f7;
  margin: 10px;
}
.category {
  font-size: 10px;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
}
.category-list {
  padding: 5px;
  background: #1f293d;
  margin-left: 10px;
  color: #fff;
}
.category-list a {
  color: #fff;
  text-decoration: none;
  background: #1f293d;
}
.cat-a {
  display: inline-block;
}
@media only screen and (max-width: 700px) {
  .wrapper-book {
    width: 80%;
    grid-template-columns: repeat(1, 1fr);
  }
  .img {
    width: 90%;
    height: 150px;
    margin: 30px auto;
  }
  .category-list {
    padding: 5px;
    display: block;
    margin: 5px;
  }
  .built-vuejs {
    display: none;
  }
  .brand {
    display: none;
  }
}
@media only screen and (max-width: 1200px) {
  .category-list {
    padding: 5px;
    display: block;
    margin: 5px;
  }
  .built-vuejs {
    left: 50px;
  }
}
</style>