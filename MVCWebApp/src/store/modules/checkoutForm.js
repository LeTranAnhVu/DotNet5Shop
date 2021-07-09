const module = {}

module.state = {
  billInfo: {},
  couponCode: '',
  additionalInfo: '',
  confirmation:{
    newsletter: false,
    policy: false
  }
}

module.getters = {
  getCheckoutForm: (state, getters) => {
    return {...state}
  }
}

module.mutations = {
  updateBillInfo(state, payload){
    state.billInfo = payload
  },
  updateCouponCode(state, code) {
    state.couponCode = code
  },
  updateAdditionalInfo(state, payload) {
    state.additionalInfo = payload
  },
  updateCheckoutConfirmation(state, {newsletter, policy}) {
    state.confirmation = {newsletter, policy}
  }
}

export default module