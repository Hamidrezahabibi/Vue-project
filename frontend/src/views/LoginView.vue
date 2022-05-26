<template>
  <div class="Login">
  	
  	<div class="row">
  		<div class="col-lg-4 mx-auto border shadow-lg rounded p-4 mt-3">
  			<h1 class="text-center mt-3 mb-4">Login</h1>
  			<form @submit.prevent="doLogin">
			  <div class="mb-3">
			    <label for="Username" class="form-label">Username</label>
			    <input 
			    	type="text" 
			    	class="form-control" 
			    	id="Username" 
			    	v-model = "username" 
			    	:class = "{
			    		'is-invalid':usernameE === true,
			    		'is-valid':usernameE === false,
			    	}">
			    <div class="invalid-feedback" v-if = "usernameE">
			      {{usernameEM}}
			    </div>
			  </div>
			  <div class="mb-3">
			    <label for="PasswordInput" class="form-label">Password</label>
			    <input 
			    	type="password" 
			    	class="form-control" 
			    	id="PasswordInput" 
			    	v-model = "password"
			    	:class = "{
			    		'is-invalid':passwordE === true,
			    		'is-valid':passwordE === false,
			    	}">
			    <div class="invalid-feedback" v-if = "passwordE">
			      {{passwordEM}}
			    </div>
			  </div>
			  <button type="submit" class="btn btn-primary">Login</button>
			</form>
  		</div>
  	</div>
  </div>
</template>

<script>

export default {
  name: 'LoginView',
  methods:{
  	data(){
  		return{
  			username : '',
  			password : '',
  			usernameE : null,
  			passwordE : null,
  			usernameEM : null,
  			passwordEM : null
  		}
  	},
  	doLogin(){
  		let access = true

  		if(this.username.length < 5){
  				access = false
  				this.usernameE = true
  			if (this.username.length == 0) {
  				this.usernameEM = "Username required"	
  			} else {
  				this.usernameEM = "Username most be least 5 charecter long."
  			}
  		} else {
  			this.usernameE = false
  			this.usernameEM = ''
  		}

  		if(this.password.length < 8){
  				access = false
  				this.passwordE = true
  			if (this.password.length == 0) {
  				this.passwordEM = "Password most be least 8 charecter long."	
  			} else {
  				this.passwordEM = "Password most be least 8 charecter long."
  			}
  		} else {
  			this.passwordE = false
  			this.passwordEM = ''
  		}
  		if (access){
  			this.$store.commit("login","12345")
  			this.$router.push("/profile")
  		}
  	}
  }
};

</script>