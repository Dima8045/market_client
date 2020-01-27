import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import categories from './modules/categories'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    users,
    categories,
  },
})
