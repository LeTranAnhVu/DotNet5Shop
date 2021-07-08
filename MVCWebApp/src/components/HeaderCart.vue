<template>
  <div>
    <div class="dropdown cart">
      <div class="nav-link text-dark" type="button" id="cart" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fas fa-cart-plus cart-icon"></i>
        <span v-if="cartItems.length > 0" class="badge badge-pill cart-badge">{{cartItems.length}}</span>
      </div>
      <div class="dropdown-menu  dropdown-menu-right" aria-labelledby="cart">
        <ul class="dropdown-item cart-list">
          <li v-for="item in cartItems" :key="item.id">
            <a href="#">{{ item.name }} x {{ item.amount }}</a>
            <button @click.stop="() => removeItemHandler(item)" class="icon-btn"><i class="far fa-trash-alt"/></button>
          </li>
        </ul>
        <hr>
        <a class="go-to-checkout-btn" href="/checkout">Go to checkout page</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderCart',
  props: {

  },
  computed: {
    cartItems() {
      console.log('heee')
      return this.$store.getters.getCartItems || []
    },
  },

  methods: {
    removeItemHandler(item) {
      this.$store.commit('removeCartItem', item)
    }
  }
}
</script>