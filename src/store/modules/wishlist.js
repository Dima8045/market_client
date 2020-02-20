export default {
  state: {
    wishList: JSON.parse(localStorage.getItem('wishList')) ? JSON.parse(localStorage.getItem('wishList')) : [],
  },
  mutations: {
    addToWishes(state, product) {
      let foundWish = state.wishList.findIndex(function (el) {
        return el.id === product.id
      })
      if(foundWish >= 0) {
        state.wishList.splice(foundWish, 1)
      } else {
        state.wishList.push(product)
      }
      localStorage.setItem('wishList', JSON.stringify(state.wishList));
    },
    removeWish(state, product) {
      let foundWish = state.wishList.findIndex(function (el) {
        return el.id === product.id
      })
      if(foundWish >= 0) {
        state.wishList.splice(foundWish, 1)
        localStorage.setItem('wishList', JSON.stringify(state.wishList))
      }
    },
  },
  getters: {
    getWishes(state) {
      return state.wishList
    },
  }
}