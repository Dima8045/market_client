import axios from 'axios'
import API_BASE_URL from '../config'

export default {
  state: {
    categories: [],
    activeCategory: 0,
  },
  mutations: {
    updateCategories(state, categories){
      state.categories = categories;
    },
    updateActiveCategory(state, id){
      state.activeCategory = id
    }
  },
  actions: {
    fetchCategories(ctx){
      axios.get(  `${API_BASE_URL}/categories`
    ).then(function (response) {
        if (response.status == 200 && typeof response.data !== 'undefined') {
          ctx.commit('updateCategories', response.data)
        }
      })
    },
    fetchCategoriesList(ctx){
      axios.get(  `${API_BASE_URL}/categories/list`
    ).then(function (response) {
        if (response.status == 200 && typeof response.data !== 'undefined') {
          ctx.commit('updateCategories', response.data.categories)
        }
      })
    },
    setActiveCategory(ctx, id){
      ctx.commit('updateActiveCategory', id)
    }
  },
  getters: {
    getCategories(state) {
      return state.categories
    },
    getActiveCategory(state){
      return state.activeCategory
    }
  }
}