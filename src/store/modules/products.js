import axios from 'axios'
import API_BASE_URL from '../config'

export default {
  state: {
    products: {},
    perPage: 1,
    productsPage: 1,
  },
  mutations: {
    updateProducts(state, products){
      state.products = products;
    },
    updateProductPage(state, productPage){
      state.productsPage = productPage
    }
  },
  actions: {
    fetchProducts(ctx){
      let uri = this.state.categories.activeCategory !== 0 ? '?category=' + this.state.categories.activeCategory : ''
      uri += this.state.categories.activeCategory !== 0 ? '&perpage=' + this.state.products.perPage : '?perpage=' + this.state.products.perPage
      uri += '&page=' + this.state.products.productsPage
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