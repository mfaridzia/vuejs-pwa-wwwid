<template>
	<div class="wrapper-book">
		<div class="books" v-for="post in posts" :key="post.thumbnail" @click="detailArticle(post)">
			<img :src="post.thumbnail" :alt="post.title"> <br/>
            <span> {{ post.author }} {{ post.pubDate }} </span>
			<h4> {{ post.title }} </h4>
            <p class="content"> 
                {{ post.description | regexcontent }} ...... 
            </p>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            posts: [],
            detailPost: []
        }
    },
    filters: {
        regexcontent: function (value) {
            if (!value) return ''
            value = value.replace(/(<([^>]+)>)/ig,"").substr(1, 115)
            return value
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            axios.get(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/wwwid`)
            .then((response) => {
                this.posts = response.data.items
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
        },
        detailArticle(data) {
            this.$store.commit('setArticle', data)
            this.$router.replace({ 'path': '/detail' })
        }
    }
}
</script>

<style scoped>
.wrapper-book {
    width: 75%;
	display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
    margin: 15px auto;
    cursor: pointer;
}
.books {
    background: #f2f2f2;
    color: #000;
	-webkit-perspective: 1000;
	-webkit-backface-visibility: hidden;
	transition: all 100ms ease-in-out;
	transition: all 100ms ease-in-out;
    padding: 5px;

}
.books:hover {
    transform: translateY(-0.5em);
}
h4 {
    padding: 0px 15px;
    line-height: 20px;
}
img {
	display: block;
	width: 100%;
    height: 170px;
}
span {
    font-size: 10px;
    padding: 0px 3px;
}
.content {
    font-size: 12px;
    padding: 0px 10px;
}

/*RESPONSIVE*/
@media only screen and (min-width: 350px) {
  .wrapper-book {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media only screen and (min-width: 500px) {
  .wrapper-book {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (min-width: 700px) {
  .wrapper-book {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media only screen and (min-width: 900px) {
  .wrapper-book {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>