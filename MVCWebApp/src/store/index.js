import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'
import checkoutForm from './modules/checkoutForm'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cart,
    checkoutForm
  },
})

export default store
