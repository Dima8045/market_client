import axios from 'axios'
import API_BASE_URL from '../config'

export default {
  state: {
    products: {},
  },
  mutations: {
    updateProducts(state, products){
      state.products = products;
    }
  },
  actions: {
    fetchProducts(ctx, categoryId){
      let uri = this.state.categories.activeCategory !== 0 ? '?category=' + categoryId : ''
      axios.get(  `${API_BASE_URL}/products` + uri
    ).then(function (response) {
        if (response.status == 200 && typeof response.data !== 'undefined') {
          ctx.commit('updateProducts', response.data.products)
        }
      })
    },
  },
  getters: {
    getAllProducts(state) {
      return state.products
    },
  }
}