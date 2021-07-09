<template>
  <section class="order-summary section">
    <div class="header">
      <h3 class="title">Order Summary</h3>
      <p class="sub-title">Price can change depend on shipping method and taxes in your state</p>
    </div>
    <div class="body">
      <div class="row mb-4">
        <div v-for="item in orderItems" :key="item.id" class="col-12 mb-2">
          <order-item :item="item"></order-item>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-12">
          <div class="d-flex justify-content-between">
            <p class="left font-weight-bold">Sub Total</p>
            <p class="right">{{ subTotal }} {{ currency }}</p>
          </div>
          <div class="d-flex justify-content-between">
            <p class="left font-weight-bold">Tax</p>
            <p class="right">{{ taxPercent }}%</p>
          </div>
          <div class="d-flex justify-content-between">
            <p class="left font-weight-bold">Shipping</p>
            <p class="right">{{ shippingCost }} {{ currency }}</p>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-12">
          <div class="input-group no-button-border">
            <input type="text" class="form-control" v-model="couponCode" placeholder="Apply coupon code"
                   aria-label="Apply coupon code">
            <div class="input-group-append">
              <button :disabled="!couponCode" @click="checkCoupon" class="btn btn-outline-secondary"  type="button">Check Coupon</button>
            </div>
          </div>
          <small v-if="couponCheckMessage">{{ couponCheckMessage }}
            <span v-if="isValidCoupon" key="fa-check">
              <i class="fas fa-check icon-secondary"/>
            </span>
            <span v-else key="fa-times">
              <i class="fas fa-times icon-danger"/>
          </span>
          </small>
        </div>
      </div>
      <div class="row">
        <div class="col-7">
          <p class="font-weight-bold total-order-key">Total Order</p>
          <small v-if="isValidCoupon">
            <i class="fas fa-exclamation-circle icon-secondary"></i>
            Discounted {{this.checkedCoupon.discountPercent}}%
          </small>
        </div>
        <div class="col-5">
          <p class="font-weight-bold text-right total-order-price">{{ total }} {{ currency }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import OrderItem from './OrderItem.vue'
import {stringifyQuery} from '../helpers/queryParam'

export default {
  name: 'OrderSummary',

  components: {
    'order-item': OrderItem
  },
  data() {
    return {
      orderItems: [],
      couponCode: null,
      checkedCoupon: null,
      couponCheckMessage: '',
      isValidCoupon: false
    }
  },

  props: {},

  computed: {
    cartItems() {
      return this.$store.getters.getCartItems || []
    },

    taxPercent() {
      return 15
    },

    currency() {
      return 'EUR'
    },

    shippingCost() {
      return 39
    },

    subTotal() {
      const sTotal = this.orderItems.reduce((subTotal, item) => {
        subTotal += item.amount * item.price
        return subTotal
      }, 0)
      return Math.round(sTotal * 100) / 100
    },

    total() {
      let couponDiscountPercent = 0
      if (this.checkedCoupon && this.checkedCoupon.discountPercent) {
        couponDiscountPercent = this.checkedCoupon.discountPercent
      }
      const raw = this.subTotal * (1 + this.taxPercent / 100) + this.shippingCost
      const afterDiscount = raw * (1 - couponDiscountPercent / 100)
      return Math.round(afterDiscount * 100) / 100
    },
  },

  watch: {
    cartItems: {
      async handler(newVal) {
        const ids = newVal.map(newVal => newVal.id)
        if (!ids.length) {
          this.orderItems = []
          return
        }

        const products = (await this.fetchProductsByIds(ids)) || []
        if (!products.length) {
          this.orderItems = []
          return
        }
        this.orderItems = products.map(product => {
          const item = newVal.find(item => parseInt(item.id) === parseInt(product.id))
          return {...product, amount: item.amount}
        })
      },
      immediate: true
    },

    checkedCoupon: {
      handler(newVal) {
        if (!newVal) {
          return
        }
        const {code, discountPercent} = newVal
        if (discountPercent == 0) {
          this.couponCode = ''
          this.isValidCoupon = false
          this.couponCheckMessage = 'Coupon is invalid'
        } else {
          this.isValidCoupon = true
          this.couponCheckMessage = 'Coupon is applied'
          this.$store.commit('updateCouponCode', code)
        }
        console.log(this.isValidCoupon)
      },
      deep: true
    },
  },

  mounted() {
    const {couponCode} = this.$store.getters.getCheckoutForm
    this.couponCode = couponCode
  },

  methods: {
    removeItemHandler(item) {
      this.$store.commit('removeCartItem', item)
    },

    async fetchProductsByIds(ids) {
      if (!ids.length) {
        return
      }
      const query = stringifyQuery({products: ids})

      const res = await fetch('/api/checkout/product-detail' + query)
      const body = await res.json()
      return body.products || []
    },

    async checkCoupon() {
      console.log('this.couponCode', this.couponCode)
      const payload = {code: this.couponCode}
      const res = await fetch('/api/checkout/check-coupon', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      const body = await res.json()
      this.checkedCoupon = body
    }
  }
}
</script>