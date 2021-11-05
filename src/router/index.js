import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
   },

   {
     path: '/home',
     name: 'Home',
     component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },

   {
     path: '/explore',
     name: 'Explore',
     component: () => import(/* webpackChunkName: "explore" */ '../views/Explore.vue')
    },

   {
     path: '/upload',
     name: 'Upload',
     component: () => import(/* webpackChunkName: "upload" */ '../views/Upload.vue')
   },

   {
     path: '/map',
     name: 'Map',
     component: () => import(/* webpackChunkName: "map" */ '../views/Map.vue')
 },
 {
   path: '/account',
   name: 'Account',
   component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue')
 }

]

const router = new VueRouter({
  routes
})

export default router
