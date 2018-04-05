<template>
	<div class="wrapper-book">
		<div class="books">
			<img :src="article.thumbnail" :alt="article.title"> <br/>
            <span> {{ article.author }} at {{ article.pubDate }} </span>
			<h2> {{ article.title }} </h2>
            <p class="content"> 
                {{ article.description | regexcontent }} 
            </p>
		</div>
	</div>
</template>

<script>
export default {
    filters: {
        regexcontent: function (value) {
            if (!value) return ''
            value = value.replace(/(<([^>]+)>)/ig,"")
            return value
        }
    },
    computed: {
        article () {
            return this.$store.state.article
        }
    }
    /*
    methods: {
        back() {
            this.$store.commit('setArticle', {})
            this.$router.replace({ path: '/' })
        }
    } 
    */
}
</script>

<style scoped>
.wrapper-book {
    width: 55%;
    margin: 0 auto;
}
.books {
    background: #f1f1f1;
    color: #000;
	transition: all 100ms ease-in-out;
	transition: all 100ms ease-in-out;
    padding: 5px;
    height: auto;
    margin-bottom: 20px;

}
.books:hover {
    transform: translateY(-0.5em);
}
h2 {
    padding: 0px 15px;
    line-height: 30px;
}
img {
	display: block;
	width: 100%;
    height: 300px;
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
    margin: 0 auto;
  }
  .books {
      padding: 5px;
      height: auto;
  }
}

</style>