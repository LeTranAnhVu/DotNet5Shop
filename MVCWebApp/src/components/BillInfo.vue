<template>
  <section class="bill-info section">
    <div class="header">
      <h3 class="title">Billing Info</h3>
      <p class="sub-title">Please enter your bill info</p>
    </div>
    <div class="body">
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="firstname">First name</label>
            <input v-model="billInfo.firstName" type="text" class="form-control" id="firstname"
                   placeholder="First name">
          </div>
          <div class="form-group col-md-6">
            <label for="lastname">Last name</label>
            <input v-model="billInfo.lastName" type="text" class="form-control" id="lastname" placeholder="Last name">
          </div>

          <div class="form-group col-md-6">
            <label for="email">Email</label>
            <input v-model="billInfo.email" type="email" class="form-control" id="email" placeholder="Email">
          </div>
          <div class="form-group col-md-6">
            <label for="phone">Phone number</label>
            <input v-model="billInfo.phone" type="text" class="form-control" id="phone" placeholder="Phone Number">
          </div>

          <div class="form-group col-md-6">
            <label for="address">Address</label>
            <input v-model="billInfo.address" type="text" class="form-control" id="address" placeholder="Address">
          </div>
          <div class="form-group col-md-6">
            <label for="townorcity">Town/City</label>
            <input v-model="billInfo.townCity" type="text" class="form-control" id="townorcity"
                   placeholder="Town or City">
          </div>

          <div class="form-group col-md-6">
            <label for="stateorcountry">State/Country</label>
            <input v-model="billInfo.stateCountry" type="text" class="form-control" id="stateorcountry"
                   placeholder="State or country">
          </div>
          <div class="form-group col-md-6">
            <label for="zipcode">Zip/Portal code</label>
            <input v-model="billInfo.zipCode" type="text" class="form-control" id="zipcode"
                   placeholder="Zip or portal code">
          </div>
          {{ JSON.stringify(checkoutForm) }}
        </div>
      </form>
      <small v-if="touched && !isValidForm" class="text-danger">All fields are required!</small>
    </div>
  </section>
</template>

<script>

export default {
  name: 'BillInfo',

  components: {},
  data() {
    return {
      touched: false,
      billInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        townCity: '',
        stateCountry: '',
        zipCode: '',
        isValid: false
      }
    }
  },

  props: {},
  computed: {
    checkoutForm() {
      return this.$store.getters.getCheckoutForm
    },

    isValidForm() {
      return this.validateBillInfoStep(this.checkoutForm)
    },
  },

  watch: {
    billInfo: {
      handler(newVal) {
        this.touched = true
        this.$store.commit('updateBillInfo', newVal)
      },
      deep: true,
    },
    isValidForm(newVal){
      this.billInfo.isValid = newVal
    },
  },

  methods: {
    validateBillInfoStep({billInfo}) {
      let check = true
      for (const billInfoKey in billInfo) {
        if (billInfo.hasOwnProperty(billInfoKey)) {
          if (typeof billInfo[billInfoKey] === 'string' && !billInfo[billInfoKey].trim()) {
            check = false
            break
          }
        }
      }

      return check
    }
  }
}
</script>