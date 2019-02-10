<template>
	<div>
  	<header>
      <ul>
        <li>
          <router-link to="/" class="brand"> WWWID - MEDIUM </router-link>
        </li>
        <li>
           <router-link to="/" class="back"> Back </router-link>
        </li>
      </ul>
    </header>
		<div class="wrapper-book">
			<div class="books">
				<h1> {{ article.title }} </h1>
				 <p class="author-pubdate-detail"> <u> Oleh {{ article.author }} </u> at <u> {{ article.pubDate }} </u> </p>
				<img v-lazy="article.thumbnail" alt="article.title" class="img-cat"> <br/>
				<p class="content" v-html="article.description"></p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		article () {
			return this.$store.state.article
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
	background-color: #fff;
	margin: 90px auto;
}
.img-cat {
	width: 95%;
	margin-top: 10px;
}
.books {
	background: #f9f9f9;
	color: #000;
	padding: 40px;
	height: 0 auto;
	margin-bottom: 20px;
}
.content >>> img {
	width: 100%;
}
.content >>> ul li {
	font-size: 12px;
	overflow: hidden;
	margin-left: 0px;
}
.content >>> a {
	color: rgb(155, 151, 151);
}
.content >>> pre {
	background: #efeded;
	width: 100%;
	/* word-wrap: break-word; */
	white-space: pre-wrap;
}
.content >>> p a {
	display: inline;
	text-align: left;
	padding: 0px 10px;
}
.content >>> figcaption {
	width: 100%;
	color: #000;
	display: none;
}
.author-pubdate-detail {
	text-align: left;
	padding-left: 15px;
	font-size: 12px;
	margin-top: -10px;
}
.back {
	background: #fff;
	color: #000;
	font-weight: bold;
	border-radius: 3px;
}
h1 {
	padding: 0px 15px;
	line-height: 35px;
	text-align: left;
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
	padding: 10px;
	line-height: 30px;
	text-align: left;
	color: black;
}
.back {
	text-align: center;
	font-size: 17px;
	cursor: pointer;
	color: #000;
}
.back:hover {
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
	header ul {
		margin-left: 0px;
	}
	.back {
		margin-left: 0px;
	}
}
</style>