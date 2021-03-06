import axios from 'axios'
import API_BASE_URL from '../config'

export default {
  state: {
    products: JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) : [],

    perPage: 4,
    productsPage: 1,
  },
  mutations: {
    updateProducts(state, products){
      state.products = products;
    },
    updateProductPage(state, productPage){
      state.productsPage = productPage
    },
  },
  actions: {
    async fetchProducts(ctx){
      let uri = this.state.categories.activeCategory !== 0 ? '?category=' + this.state.categories.activeCategory : ''
      uri += this.state.categories.activeCategory !== 0 ? '&perpage=' + this.state.products.perPage : '?perpage=' + this.state.products.perPage
      uri += '&page=' + this.state.products.productsPage
      const response = await axios.get(  `${API_BASE_URL}/products` + uri)
      if (response.status == 200 && typeof response.data !== 'undefined') {
        ctx.commit('updateProducts', response.data.products)
      }
    },
    async fetchProductsByIds(ctx, ids){
      const response = await axios.post(  `${API_BASE_URL}/products/get-by-ids`, ids)
      if (response.status == 200 && typeof response.data !== 'undefined') {
        ctx.commit('updateProducts', response.data.products)
      }
    },
  },
  getters: {
    getAllProducts(state) {
      return state.products
    },
    getProductsByIds(state) {
      return state.products.data
    },
    getProductById: state => id => {
      return state.products.data.find(product => product.id === id)
    }
  }
}