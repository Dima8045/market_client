import axios from 'axios'
import API_BASE_URL from '../config'

export default {
  state: {
    categories: [],
  },
  mutations: {
    updateCategories(state, categories){
      state.categories = categories;
    }
  },
  actions: {
    fetchCategories(ctx){
      axios.get(  `${API_BASE_URL}/categories`,
        {
          headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + JSON.parse(localStorage.getItem('currentUser')).access_token
        }
      }
    ).then(function (response) {
        if (response.status == 200 && typeof response.data !== 'undefined') {
          ctx.commit('updateCategories', response.data)
        }
      })
    },
  },
  getters: {
    getAllCategories(state) {
      return state.categories
    },
  }
}