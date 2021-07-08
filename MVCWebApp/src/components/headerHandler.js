import Vue from 'vue'
import HeaderCart from './HeaderCart.vue'

export default class HeaderHandler {
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