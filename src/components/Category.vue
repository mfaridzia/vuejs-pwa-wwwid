<template>
	<div>
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
      </ul>
    </header>
    <div class="wrapper-book">
      <h4> Articles in category <strong> {{ $route.params.slug }} </strong> </h4>
      <div class="books" v-for="(item, index) in items" :key="index">
        <h1 @click="detailArticle(item)" class="title"> {{ item.title }} </h1>
         <img v-lazy="item.thumbnail" alt="item.title">
        <p v-if="item.guid === 'https://medium.com/p/c1e27e7e2742'"> {{ item.description | regexContentunik }} ... </p>
        <p v-else> {{ item.description | regexContent }} ... </p>
      </div>
	  </div>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters.articleCategory(this.$route.params.slug)
    }
  },
  filters: {
    regexContent: function (value) {
      if (!value) return ''
        value = value.replace(/(<([^>]+)>)/ig,"").substr(1, 200)
      return value
    }
  },
  methods: {
    detailArticle(data) {
      this.$store.commit('setArticle', data)
      this.$router.replace({ 'path': '/category/post/article-detail' })
    }
  }
}
</script>

<style scoped>
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

.wrapper-book {
  width: 70%;
  margin: 90px auto;
}
.books {
  background: #f9f9f9;
  color: #000;
	transition: all 100ms ease-in-out;
	transition: all 100ms ease-in-out;
  padding: 20px 50px;
  height: auto;
  margin-bottom: 20px;
}
.a-pubdate {
  font-size: 12px;
  text-align: left;
  margin-left: 50px;
}
h4 {
  text-align: left;
  padding: 0px 0px;
}
strong {
  padding: 5px;
  background-color: slategrey;
  color: #fff;
  font-size: 14px;
}
.title {
  cursor: pointer;
}
h2 {
  padding: 0px 15px;
  line-height: 30px;
}
img {
	display: block;
	width: 70%;
  height: 300px;
  margin: 0 auto;
}
p {
  font-size: 17px;
}
span {
  font-size: 12px;
  padding: 0px 3px;
}
.content {
  font-size: 14px;
  padding: 0px 30px;
  line-height: 30px;
  text-align: justify;
}
.back {
  text-align: center;
  font-size: 17px;
  cursor: pointer;
  color: #3498db;
}
/*RESPONSIVE*/
@media only screen and (max-width: 750px) {
  .wrapper-book {
    width: 80%;
    margin: 90px auto;
  }
.books {
    padding: 5px;
    height: auto;
  }
  .brand {
    display: none;
  }
}

</style>