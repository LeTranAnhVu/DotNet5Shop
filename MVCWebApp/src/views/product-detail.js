import Vue from 'vue'
import $ from 'jquery'
import SearchQueryHandler from '../components/searchQueryHandler'
import AddToCart from '../components/AddToCart.vue'

export function run() {
  const cartHandler = new CartHandler()
  cartHandler.run()

  const searchQueryHandler = new SearchQueryHandler()
  searchQueryHandler.run()
}

class CartHandler {
  $updateCartBox = $('.js-update-cart-box')
  $renderEl = this.$updateCartBox.children('.vue-component')
  run() {
    const productId = parseInt(this.$updateCartBox.attr('data-id'))
    const productName = this.$updateCartBox.attr('data-name')
    this._vm = new Vue({
      template: '<cart :productId="productId" :productName="productName"/>',
      el: this.$renderEl[0],
      data() {
        return {
          productId,
          productName
        }
      },
      store: window.$store,
      components: {
        'cart': AddToCart
      }
    })
  }
}