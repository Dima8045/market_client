import axios from 'axios'
import API_BASE_URL from '../config'

export default {
  state: {
    categories: [],
    activeCategory: JSON.parse(localStorage.getItem('activeCategory')) || 0,
  },
  mutations: {
    updateCategories(state, categories){
      state.categories = categories;
    },
    updateActiveCategory(state, id){
      state.activeCategory = id
      localStorage.setItem('activeCategory', JSON.stringify(state.activeCategory));
    }
  },
  actions: {
    async fetchCategories(ctx){
      const response = await axios.get(  `${API_BASE_URL}/categories`)
        if (response.status == 200 && typeof response.data !== 'undefined') {
          ctx.commit('updateCategories', response.data)
        }
       },
    async fetchCategoriesList(ctx){
      const response = await axios.get(  `${API_BASE_URL}/categories/list`)
        if (response.status == 200 && typeof response.data !== 'undefined') {
          ctx.commit('updateCategories', response.data.categories)
        }
      },
    async setActiveCategory(ctx, id){
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