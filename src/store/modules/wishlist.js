export default {
  state: {
    wishList: JSON.parse(localStorage.getItem('wishList')) ? JSON.parse(localStorage.getItem('wishList')) : [],
  },
  mutations: {
    addWish(state, product) {
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
      console.log(state, product)
      state.wishList = state.wishList.filter(function (el){
        return el.id !== product.id
      })
      localStorage.setItem('wishList', JSON.stringify(state.wishList));
    },
    changeQuantity(state, product) {
      localStorage.removeItem('currentUser');
      state.wishList = state.wishList.filter(function (el){
        if (el.id === product.id) {
          el.quantity = product.quantity
        }
        return el
      })
      localStorage.setItem('wishList', JSON.stringify(state.wishList));
    }
  },
  actions: {
    addToWishes(ctx, product = {}){
      if (typeof product.id !== 'undefined' && typeof product.quantity != 'undefined') {
        ctx.commit('addWish', product)
      }
    },
    removeFromWishes(ctx, product = {}){
      if (typeof product.id !== 'undefined' && typeof product.quantity != 'undefined') {
        ctx.commit('removeWish', product)
      }
    },
    changeWishQuantity(ctx, product = {}){
      if (typeof product.id !== 'undefined' && typeof product.quantity != 'undefined') {
        ctx.commit('changeQuantity', product)
      }
    },
  },
  getters: {
    getWishes(state) {
      return state.wishList
    },
  }
}