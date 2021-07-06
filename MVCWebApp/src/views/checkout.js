import $ from 'jquery'
import queryString from 'query-string'
import {stringifyQuery} from '../helpers/queryParam'

export function run() {
  const orderHandler = new OrderHandler()
  orderHandler.run()
}

class OrderHandler {
  $store = window.$store
  async run() {
    const items = this.$store.getters('getCartItems') || []
    const ids = items.map(item => item.id)
    const query = stringifyQuery({products: ids})

    const res = await fetch('/checkout/productDetail' + query)
    const body = await res.json()
    const products = body.products || []
    
  }
}