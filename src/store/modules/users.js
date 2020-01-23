import axios from 'axios'
import API_BASE_URL from '../config'
import router from '../../router'

export default {
  state: {
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || {},
    registrationUser: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      access_token: '',
    },
    redirect: '',
  },
  mutations: {
    registerUser(state, data) {
      state.currentUser = data.user
      state.redirect = data.redirect
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    },
    loginUser(state, data) {
      state.currentUser = data.user
      state.redirect = data.redirect
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    },
    logoutUser(state) {
      localStorage.removeItem('currentUser');
      state.currentUser = {}
    }
  },
  actions: {
    register(ctx, form){
      axios.post(  `${API_BASE_URL}/register`, form)
        .then(function (response) {
          if (response.status == 200 && typeof response.data.user !== 'undefined') {
            ctx.commit('registerUser', response.data)
            router.push('home')
          }
        })
    },
    login(ctx, form){
      axios.post(  `${API_BASE_URL}/login`, form)
        .then(function (response) {
          if (response.status == 200 && typeof response.data.user !== 'undefined') {
            ctx.commit('loginUser', response.data)
          }
          router.push('home')
        })
    },
    logout(ctx) {
      axios.get(  `${API_BASE_URL}/logout`,
        {
          headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem('currentUser')).access_token
          }
        })
        .then(function (response) {
          if (response.status == 200) {
            ctx.commit('logoutUser')
            router.push('home')
          }
        })
    }
  },
  getters: {
    getUser(state) {
      return state.currentUser
    },
  }
}