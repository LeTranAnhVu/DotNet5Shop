<template>
  <div class="col-sm-6 align-items-center d-flex js-update-cart-box justify-content-end">
    <div v-if="currentItem"
         class="order-amount btn js-up-down-btn"
    >
      <input type="number" class="amount" v-model="currentItem.amount" min="1"/>
      <div class="btn-vertical">
        <button @click="upBtnHandler" class="btn-up">
          <i class="fas fa-chevron-up"></i>
        </button>
        <button @click="downBtnHandler" class="btn-down">
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
    </div>
    <button
        v-if="!currentItem"
        @click="addToCartHandler"
        class="btn btn-secondary js-add-to-cart-btn"
    >
      <i class="fa fa-plus mr-2"></i>
      <span>Add to cart</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'AddToCart',
  props: {
    productId: Number,
    productName: String
  },
  computed: {
    cartItems() {
      return this.$store.getters.getCartItems || []
    },
    currentItem() {
      return this.cartItems.find(item => item.id === this.productId) || null
    }
  },

  methods: {
    addToCartHandler(event) {
      event.preventDefault()
      const payload = {id: this.productId, name: this.productName}
      this.$store.commit('increaseCartItem', payload)
    },

    upBtnHandler(event) {
      event.preventDefault()
      const payload = {id: this.productId, name: this.productName}
      this.$store.commit('increaseCartItem', payload)
    },

    downBtnHandler(event) {
      event.preventDefault()
      const payload = {id: this.productId, name: this.productName}
      this.$store.commit('decreaseCartItem', payload)
    }
  }
}
</script>