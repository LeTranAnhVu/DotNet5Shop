<template>
  <section class="section">
    <div class="header">
      <h3 class="title">Confirmation</h3>
      <p class="sub-title">We are getting to the end. Just few clicks and your order is ready!</p>
    </div>
    <div class="body">
      <div class="row">
        <div class="col-12 mb-2">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="confirmation.newsletter" id="newsletter-check">
            <label class="form-check-label" for="newsletter-check">I agree with sending an Marketing and new newsletter emails. No spam, promissed!</label>
          </div>
        </div>
        <div class="col-12 mb-4">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="confirmation.policy" value="" id="policy-check">
            <label class="form-check-label" for="policy-check">I agree with our <a href="">terms and conditions</a> and <a href="">privacy policy</a></label>
          </div>
        </div>
        <div class="col-12">
          <button @click="submitCheckoutForm" :disabled="!isValidForm" class="btn btn-secondary">Complete order</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'CheckoutConfirmation',

  components: {
  },
  data() {
    return {
      confirmation: {
        newsletter: false,
        policy: false
      }
    }
  },

  computed: {
    checkoutForm() {
      return this.$store.getters.getCheckoutForm;
    },

    isValidForm(){
      const check = this.validateConfirmStep() && this.validateBillInfoStep()
      return check
    }
  },

  watch: {
    confirmation: {
      handler(newVal){
        this.$store.commit('updateCheckoutConfirmation', newVal)
      },
      immediate: true,
      deep: true
    }
  },

  methods: {
    validateConfirmStep(){
      const {confirmation: {policy}} = this.checkoutForm
      return !!policy;
    },

    validateBillInfoStep(){
      const {billInfo} = this.checkoutForm
      return !!(billInfo && billInfo.isValid)
    },

    async submitCheckoutForm() {
      console.log('sdfsd')
      if(!this.isValidForm) {
        alert("The checkout form is invalid. Please fill the required information above.")
        return
      }

      const payload = {...this.checkoutForm}
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      const body = await res.json()
      console.log('===>', body)
    }
  }
}
</script>