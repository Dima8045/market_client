import axios from 'axios'
import API_BASE_URL from '../config'

export default {
  state: {
    cart: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [],
    subtotal: 220,
    coupon: null
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
        state.cart[foundInCart].total = (cartItem.quantity * cartItem.price).toFixed(2)
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));

      state.subtotal = 0
      for(let i = 0; i < state.cart.length; i++){
        if (isNaN(state.cart[i]))
        state.subtotal += Number(state.cart[i].total)
      }

    },
    setSubtotal(state) {
      state.subtotal = 0
      for(let i = 0; i < state.cart.length; i++){
        if (isNaN(state.cart[i]))
        state.subtotal += Number(state.cart[i].total)
      }
      return state.subtotal
    },
    setCoupon(state, coupon) {
      state.coupon = coupon
    }
  },
  actions: {
    async fetchCouponBycCode(ctx, coupon) {
      const response = await axios.post(`${API_BASE_URL}/coupons/get-by-code`, {code: coupon})
      if (response.status == 200 && response.data !== 'undefined') {
        ctx.commit('setCoupon', response.data)
      }
    }
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
    getSubtotal(state) {
      return state.subtotal
    },
    getCoupon(state) {
      return state.coupon
    }
  }
}