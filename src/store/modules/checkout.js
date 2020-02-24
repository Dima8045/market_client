export default {
  state: {
    wishList: JSON.parse(localStorage.getItem('wishList')) ? JSON.parse(localStorage.getItem('wishList')) : [],
  },
  mutations: {
    },
  getters: {
  }
}