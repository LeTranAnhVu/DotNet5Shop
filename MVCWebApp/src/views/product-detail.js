import $ from 'jquery'
import SearchQueryHandler from '../components/searchQueryHandler'

export function run() {
  const cartHandler = new CartHandler()
  cartHandler.run()

  const searchQueryHandler = new SearchQueryHandler()
  searchQueryHandler.run()
}

class CartHandler {
  $updateCartBox = $('.js-update-cart-box')
  $upDownBtnBox = $('.js-update-cart-box .js-up-down-btn')
  $addToCartBtn = $('.js-update-cart-box .js-add-to-cart-btn')
  $amountInput = $('.js-update-cart-box input[name="amount"]')
  $upBtn = $('.js-update-cart-box .btn-up')
  $downBtn = $('.js-update-cart-box .btn-down')
  _product = {}
  $store = window.$store
  $subPub = window.$subPub

  run() {
    this._product.id = parseInt(this.$updateCartBox.attr('data-id'))
    this._product.name = this.$updateCartBox.attr('data-name')

    this.updateState()
    this.listenAddToCartButton()
    this.listenUpBtn()
    this.listenDownBtn()
    this.listenInputChange()
    this.$subPub.sub('cart-change', () => {
      this.updateState()
    })
  }

  updateState() {
    const items = $store.getters('getCartItems')

    const item = items.find(_item => _item.id === this._product.id)
    if (item) {
      this.$addToCartBtn.addClass('hidden')
      this.$upDownBtnBox.removeClass('hidden')
      const currentAmount = this.$amountInput.val()
      if (currentAmount !== item.amount) {
        this.$amountInput.val(item.amount)
      }
    } else {
      this.$amountInput.val(0)
      this.$addToCartBtn.removeClass('hidden')
      this.$upDownBtnBox.addClass('hidden')
    }

  }

  listenInputChange() {
    this.$amountInput.change(event => {
      const updatedAmount = parseInt(event.target.value)
      this.$store.commit('updateCartItem', {...this._product, amount: updatedAmount})
      this.updateState()
      this.$subPub.pub('cart-change')
    })
  }

  listenAddToCartButton() {
    this.$addToCartBtn.click(event => {
      event.preventDefault()
      this.$store.commit('increaseCartItem', {...this._product})
      this.updateState()
      this.$subPub.pub('cart-change')
    })
  }

  listenDownBtn() {
    this.$downBtn.click(event => {
      event.preventDefault()
      this.$store.commit('decreaseCartItem', {...this._product})
      this.updateState()
      this.$subPub.pub('cart-change')
    })
  }

  listenUpBtn() {
    this.$upBtn.click(event => {
      event.preventDefault()
      this.$store.commit('increaseCartItem', {...this._product})
      this.updateState()
      this.$subPub.pub('cart-change')
    })
  }

}