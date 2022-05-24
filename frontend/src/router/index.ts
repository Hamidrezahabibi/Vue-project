import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import AboutView from '../views/AboutView.vue'
import ProfileView from '../views/ProfileView.vue'
import AddView from '../views/AddView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import RegisterView from '../views/RegisterView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { url: true }
  },
  {
    path: '/article/:slug',
    name: 'Detail',
    component: DetailView,
    meta: { url: true }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { url: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView,
    meta: { LoginRequired: true }
  },
  {
    path: '/add',
    name: 'Add',
    component: AddView,
    meta: { LoginRequired: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { LoginRedirect: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
    meta: { LoginRedirect: true }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: LogoutView,
    meta: { LoginRequired: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.LoginRequired)) {
    if (store.state.isAuthentication) {
      next()
    } else {
      next("/login")
    }
  } else if(to.matched.some(record => record.meta.LoginRedirect)) {
      if(!store.state.isAuthentication){
        next()
      }else {
        next("/profile") 
      }
    } else if(to.matched.some(record => record.meta.url)) {
      if(!store.state.isAuthentication){
        next()
      }else {
        next() 
      }
    }   
})

export default router
