<template>
  <div class="Register">
  	
  	<div class="row">
  		<div class="col-lg-4 mx-auto border shadow-lg rounded p-4 mt-3">
  			<h1 class="text-center mt-3 mb-4">Register</h1>
  			<form @submit.prevent="doRegister">
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
        <div class="mb-3">
          <label for="Repeatpassword" class="form-label">Repeat password</label>
          <input 
            type="password" 
            class="form-control" 
            id="Repeatpassword" 
            v-model = "password2"
            :class = "{
              'is-invalid':passwordE2 === true,
              'is-valid':passwordE2 === false,
            }">
          <div class="invalid-feedback" v-if = "passwordE2">
            {{passwordEM2}}
          </div>
        </div>
			  <button type="submit" class="btn btn-primary">Register</button>
			</form>
  		</div>
  	</div>
  </div>
</template>

<script>

export default {
  name: 'RegisterView',
  methods:{
  	data(){
  		return{
  			username : '',
  			password : '',
        password2 : '',
  			usernameE : null,
        passwordE : null,
  			passwordE2 : null,
  			usernameEM : null,
        passwordEM : null,
  			passwordEM2 : null
  		}
  	},
  	doRegister(){
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
  				this.passwordEM = "Password required."	
  			} else {
  				this.passwordEM = "Password most be least 8 charecter long."
  			}
  		} else {
  			this.passwordE = false
  			this.passwordEM = ''
  		}

      if(this.password2.length < 8){
          access = false
          this.passwordE2 = true
        if (this.password.length == 0) {
          this.passwordEM = "Repeat password required."  
        } else {
          this.passwordEM = "Repeat password most be least 8 charecter long."
        }
      } else {
        this.passwordE = false
        this.passwordEM = ''
      }

      if (this.password != this.password2){
        access = false
        this.passwordE = true
        this.passwordE2 = true
        this.passwordEM = "Password are not same."
      } else {
          if (!this.passwordEM && !this.passwordEM2){
            this.passwordEM = ""
          }
      }

  		if (access){
  			this.$store.commit("login","12345")
  			this.$router.push("/profile")
  		}
  	}
  }
};

</script>