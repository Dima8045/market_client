export default {
  state: {
    cart: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [],
  },
  mutations: {
    addToCart(state, product) {
      let foundInCart = state.cart.findIndex(function (el) {
        return el.id === product.id
      })
      if(foundInCart >= 0) {
        state.cart.splice(foundInCart, 1)
      } else {
        product.quantity = 1
        state.cart.push(product)
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    changeQuantity(state, cartItem)
    {
      let foundInCart = state.cart.findIndex(function (el) {
        return el.id == cartItem.id
      })
      if(foundInCart >= 0) {
        state.cart[foundInCart].quantity = cartItem.quantity
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
  getters: {
    getCart(state) {
      return state.cart
    },
    getCountCart(state) {
      return state.cart.length
    },
    getCartProductsIds(state) {
      return state.cart.map(obj => {return obj.id})
    },
  }
}