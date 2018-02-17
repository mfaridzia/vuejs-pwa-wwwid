<template>
	<div class="wrapper-book">
		<div class="books">
			<img :src="article.thumbnail" :alt="article.title"> <br/>
            <span> Ditulis oleh: {{ article.author }} pada {{ article.pubDate }} </span>
			<h2> {{ article.title }} </h2>
            <p class="content"> 
                {{ article.description.replace(/(<([^>]+)>)/gi,"") }} 
            </p>
            <button @click="back"> < Kembali ke halam utama </button>
		</div>
	</div>
</template>

<script>
export default {
    computed: {
        article () {
            return this.$store.state.article
        }
    },
    methods: {
        back() {
            this.$store.commit('setArticle', {})
            this.$router.replace({ path: '/' })
        }
    }
}
</script>

<style scoped>
.wrapper-book {
    width: 75%;
    margin: 0 auto;
}
.books {
    background: #f2f2f2;
    color: #000;
	-webkit-perspective: 1000;
	-webkit-backface-visibility: hidden;
	transition: all 100ms ease-in-out;
	transition: all 100ms ease-in-out;
    padding: 5px;
    height: auto;

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
    font-size: 14px;
    padding: 0px 3px;
}
.content {
    font-size: 14px;
    padding: 0px 30px;
    line-height: 30px;
    text-align: justify;
}
button {
    border: 0px;
    background: #3498db;
    padding: 15px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 20px;
    cursor: pointer;
    border-radius: 5px;
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