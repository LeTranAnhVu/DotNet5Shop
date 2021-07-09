import Vue from 'vue'
import OrderSummary from '../components/OrderSummary.vue'
import BillInfo from '../components/BillInfo.vue'
import AdditionalInfo from '../components/AdditionalInfo.vue'
import CheckoutConfirmation from '../components/CheckoutConfirmation.vue'

export function run() {
  const orderHandler = new OrderSummaryHandler()
  orderHandler.run()

  const billInfoHandler = new BillInfoHandler()
  billInfoHandler.run()

  const additionalInfoHandler = new AdditionalInfoHandler()
  additionalInfoHandler.run()

  const confirmation = new ConfirmationHandler()
  confirmation.run()
}

class OrderSummaryHandler {
  async run() {
    const $render = $('#order-summary .vue-component')
    this._vm = new Vue({
      template: '<order-summary/>',
      el: $render[0],
      store: window.$store,
      components: {
        'order-summary': OrderSummary
      }
    })
  }
}

class BillInfoHandler {
  async run() {
    const $render = $('#bill-info .vue-component')
    this._vm = new Vue({
      template: '<bill-info/>',
      el: $render[0],
      store: window.$store,
      components: {
        'bill-info': BillInfo
      }
    })
  }
}

class AdditionalInfoHandler {
  async run() {
    const $render = $('#additional-info .vue-component')
    this._vm = new Vue({
      template: '<additional-info/>',
      el: $render[0],
      store: window.$store,
      components: {
        'additional-info': AdditionalInfo
      }
    })
  }
}

class ConfirmationHandler {
  async run() {
    const $render = $('#checkout-confirmation .vue-component')
    this._vm = new Vue({
      template: '<confirmation/>',
      el: $render[0],
      store: window.$store,
      components: {
        'confirmation': CheckoutConfirmation
      }
    })
  }
}
