import {StoreModule} from '../store'

export function loadCartItemsFromLocalStorage() {
  console.log('Load cart items from localStorage')
  const key = '__CART__'
  const items = window.localStorage.getItem(key)
  try {
    return JSON.parse(items)
  } catch (e) {
    return null
  }
}

export function saveCartItemsFromLocalStorage(items) {
  const key = '__CART__'
  return window.localStorage.setItem(key, JSON.stringify(items))
}

const module = new StoreModule()

module.name = 'cart'

module.state = {
  items: []
}

module.getters = {
  getCartItems: (context, payload) => {
    const state = module.state
    return state.items
  }
}

module.mutations = {
  loadCartItem(context, item) {
    const key = '__CART__'
    const items = window.localStorage.getItem(key)
    try {
      const cartItems = JSON.parse(items)
      module.state.items = cartItems || []
    } catch (e) {
      console.error('cannot parse cart item', e)
    }

  },
  addCartItem(context, item) {
    const state = module.state

    const exist = state.items.some(_item => _item.id === item.id)
    if (!exist) {
      state.items.push({...item, amount: 1})
    }

    saveCartItemsFromLocalStorage(state.items)
  },
  removeCartItem(context, item) {
    const state = module.state

    const idx = state.items.findIndex(_item => _item.id === item.id)
    if (idx !== -1) {
      state.items.splice(idx, 1)
    }

    saveCartItemsFromLocalStorage(state.items)
  },

  increaseCartItem(context, item) {
    const state = module.state

    const idx = state.items.findIndex(_item => _item.id === item.id)
    if (idx !== -1) {
      const amount = parseInt(state.items[idx].amount) + 1
      state.items.splice(idx, 1, {...item, amount})
    } else {
      context.commit('addCartItem', item)
    }

    saveCartItemsFromLocalStorage(state.items)
  },

  decreaseCartItem(context, item) {
    const state = module.state

    const idx = state.items.findIndex(_item => _item.id === item.id)
    if (idx !== -1) {
      const amount = parseInt(state.items[idx].amount) - 1
      if (amount) {
        state.items.splice(idx, 1, {...item, amount})
      } else {
        context.commit('removeCartItem', item)
      }
    }

    saveCartItemsFromLocalStorage(state.items)
  },

  updateCartItem(context, item) {
    const state = module.state

    const idx = state.items.findIndex(_item => _item.id === item.id)
    if (item && typeof item.amount !== 'undefined' && idx !== -1) {
      if (item.amount > 0) {
        state.items.splice(idx, 1, item)
      } else {
        context.commit('removeCartItem', item)
      }
      saveCartItemsFromLocalStorage(state.items)
    }
  }
}

export default module