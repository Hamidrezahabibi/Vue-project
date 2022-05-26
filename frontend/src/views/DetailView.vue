<template>
  <div class="Detail">
  	<h1 class="text-center my-3">{{article.title}}</h1> 	
  	<hr>
	  <article class="mt-5">
	  	<div>{{article.content}}</div>
	  	<hr>
	  </article>

	  <div class= "mt-4" v-if = "$store.state.isAuthentication">
	  	<button class="btn btn-warning mr-2" @click = "edit = !edit">Edit</button>
	  	<button class="btn btn-danger" @click = "doRemove">Delete</button>
	  </div>    
	  	
	  <div class = "my-4" v-if = "edit == true">
	  	<hr>
	  	<form @submit.prevent = "doEdit">
			<div class="mb-3 pt-4">
				<label for="TitleInput" class="form-label">Title</label>
				<input type="text" class="form-control" id="TitleInput" v-model = "title">
			</div>
			<div class="mb-3">
			   <label for="DescriptionInput" class="form-label">Description</label>
			   <textarea class="form-control" id="DescriptionInput" rows="3" v-model = "description"></textarea>
			</div>
			<div class="mb-3">
			   <label for="ContentInput" class="form-label">Content</label>
			   <textarea class="form-control" id="ContentInput" rows="6" v-model = "content"></textarea>
			</div>
				<button class="btn btn-warning">Edit</button>
			</form>
	  </div>
  </div>
</template>

<script>
	export default {
  name: 'Detail',
  data(){
  	  let articles = localStorage.getItem("articles")
  	  articles = JSON.parse(articles)
  	  let article = articles.find(
  	  		article => article.slug == this.$route.params.slug
  	  )

	  return {
		  articles: articles,
		  article : article,
		  title : article.title,
			description : article.description,
			content : article.content,
			edit : false
	  }
  },
  methods : {
  	doEdit() {
  		let index = this.articles.findIndex(
  	  		article => article.slug == this.$route.params.slug
  	  )
  		this.articles[index] = {
  			title : this.title,
	  		slug : this.title.replaceAll(" ",'-').toLowerCase(),
				description : this.description,
				content : this.content,	
  		}
	  	let database = JSON.stringify(this.articles)
	  	localStorage.setItem('articles', database)
	  	this.article = this.articles[index]
	  	this.edit = false
	  	this.$router.push(`/article/${this.articles[index].slug}`)
  	},
  	doRemove(){
  		let index = this.articles.findIndex(
  	  		article => article.slug == this.$route.params.slug
  	  )
  		this.articles.splice(index, 1)
  		let database = JSON.stringify(this.articles)
	  	localStorage.setItem('articles', database)
	  	this.$router.push("/")
  	}
  }
};
</script>