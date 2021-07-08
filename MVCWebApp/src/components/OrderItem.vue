<template>
  <div class="ordered-item-card">
    <div class="row">
      <div class="col-4 col-md-12 col-lg-4">
        <div class="img-wrapper">
          <img :src="item.imageUrl">
        </div>
      </div>
      <div class="col-8 col-md-12 col-lg-8">
        <div class="info">
          <div class="row">
            <div class="col-12 mb-3">
              <h6 class="product-name">{{item.name}}</h6>
              <stars :stars="item.stars" />
            </div>
            <div class="col-6">
              <div class="price-section">
                <p class="current-price">
                  {{item.price}} <span class="currency">{{currency}}</span>
                </p>
                <p class="old-price">{{item.oldPrice}}</p>
              </div>
            </div>
            <div class="col-6">
              <div class="action text-right">
                <add-to-cart :productId="item.id" :product-name="item.name"/>
              </div>
            </div>
          </div>
          <div class="overlay">
            <button @click="removeItemHandler" class="btn remove-item">Remove it</button>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import Stars from './Stars.vue'
import AddToCart from './AddToCart.vue'

export default {
  name: 'OrderItem',
  components: {
    'stars': Stars,
    'add-to-cart': AddToCart
  },
  props: {
    item: Object,
    currency: 'string'
  },
  data(){
    return {
      amount: this.item.amount || 0
    }
  },

  computed: {

  },

  methods: {
    removeItemHandler() {
      const payload = {id: this.item.id}
      this.$store.commit('removeCartItem', payload)
    }
  }
}
</script>