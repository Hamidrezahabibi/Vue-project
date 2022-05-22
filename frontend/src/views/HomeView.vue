<template>
  <div class="home">
  	<h1 class="text-center my-5">Home</h1> 	
	  <article v-for = "article in articles">
	  	<h3><router-link :to="`/article/${article.slug}`" aria-current="page">{{article.title}}</router-link></h3>
	  	<div>{{article.description}} <router-link :to="`/article/${article.slug}`" aria-current="page"> +more</router-link></div>
	  	<hr>
	  </article>    
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data(){
  	  let articles = localStorage.getItem("articles")
  	  articles = JSON.parse(articles)

	  return{
		  articles: articles
	  }
  }
};
</script>