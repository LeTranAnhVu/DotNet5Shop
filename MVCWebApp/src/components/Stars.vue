<template>
  <span class="stars">
    <i v-for="i in wholeStars" :key="i+'-1'" class="fas fa-star"></i>
    <i v-if="isHalfStar" class="fas fa-star-half-alt"></i>
    <i v-for="ii in emptyStars" :key="ii+'-2'" class="far fa-star"></i>
  </span>
</template>

<script>
export default {
  name: 'Stars',
  props: {
    stars: 0,
  },
  computed: {
    wholeStars() {
      return Math.floor(this.stars) || 0
    },
    isHalfStar() {
      return this.stars - this.wholeStars > 0
    },
    emptyStars() {
      const empty = (5 - this.stars - (this.isHalfStar ? 1 : 0))
      return empty < 0 ? 0 : empty
    }
  },

  methods: {}
}
</script>