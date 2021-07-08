import Vue from 'vue'
import OrderSummary from '../components/OrderSummary.vue'

export function run() {
  const orderHandler = new OrderSummaryHandler()
  orderHandler.run()
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