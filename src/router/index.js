import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import About from '../components/About'
import Shop from '../components/Shop'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Cart from '../components/Cart'
import SingleProduct from '../components/SingleProduct'
import Wishlist from '../components/Wishlist'
import Checkout from '../components/Checkout'
import Signin from '../components/Signin'
import Register from '../components/Register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: Wishlist
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/product/:id',
    name: 'product/:id',
    component: SingleProduct
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
