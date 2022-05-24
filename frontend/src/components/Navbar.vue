<template>
	<div class="Navbar">
		<nav id="nav" class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
		    <div class="container-fluid">
		      <router-link to="/" class="navbar-brand">Project</router-link>
		      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
		      <span class="navbar-toggler-icon"></span>
		      </button>
		      <div class="collapse navbar-collapse" id="navbarColor03">
		        <ul class="navbar-nav mr-auto">
		          <li class="nav-item">
		            <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
		          </li>
		          <li class="nav-item">
		            <router-link to="/about" class="nav-link">About</router-link>
		          </li>
		          <li class="nav-item">
		            <router-link to="/profile" class="nav-link" v-if = "$store.state.isAuthentication">Profile</router-link>
		          </li>
		          <li class="nav-item">
		            <router-link to="/add" class="nav-link" v-if = "$store.state.isAuthentication">Add an article</router-link>
		          </li>
		          <li class="nav-item">
		            <router-link to="/login" class="nav-link" v-if = "!$store.state.isAuthentication">Login</router-link>
		          </li>
		          <li class="nav-item">
		            <router-link to="/register" class="nav-link" v-if = "!$store.state.isAuthentication">Register</router-link>
		          </li>
		          <li class="nav-item">
		            <router-link to="/logout" class="nav-link" v-if = "$store.state.isAuthentication">Logout</router-link>
		          </li>
		        </ul>
		        <form class="form-inline">
		          <input class="form-control" type="search" placeholder="Search" aria-label="Search">
		          <button class="btn btn-outline-primary" type="submit">Search</button>
		        </form>
		      </div>
		    </div>
		 </nav>
	</div>
</template>

<script>
	export default {
	  name: 'Navbar',
	}
	;
</script>