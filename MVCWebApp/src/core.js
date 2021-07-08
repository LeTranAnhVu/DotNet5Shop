import './sass/core.scss'
import store from './store'
import Vue from 'vue'
import HeaderCart from './components/HeaderCart.vue'

window.$store =  store
window.$store.commit('loadCartItem')

class HeaderHandler {
  run() {
    console.log('header run')
    this._vm = new Vue({
      template: `<header-cart/>`,
      el: '#js-cart-wrapper',
      store: window.$store,
      components: {
        'header-cart': HeaderCart
      }
    })
  }
}

const header = new HeaderHandler()
header.run()
