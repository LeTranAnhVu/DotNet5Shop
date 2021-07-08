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

const module = {}

module.state = {
  items: []
}

module.getters = {
  getCartItems: (state, getters) => {
    return state.items
  }
}

module.mutations = {
  loadCartItem(state) {
    const items = loadCartItemsFromLocalStorage() || []
    state.items = items.map(item => ({...item, id: parseInt(item.id)}))
  },
  addCartItem(state, item) {
    const exist = state.items.some(_item => _item.id === item.id)
    if (!exist) {
      state.items.push({...item, amount: 1})
    }

    saveCartItemsFromLocalStorage(state.items)
  },
  removeCartItem(state, item) {
    const idx = state.items.findIndex(_item => _item.id === item.id)
    if (idx !== -1) {
      state.items.splice(idx, 1)

    }

    saveCartItemsFromLocalStorage(state.items)
  },

  increaseCartItem(state, item) {
    const idx = state.items.findIndex(_item => _item.id === item.id)
    if (idx !== -1) {
      const amount = parseInt(state.items[idx].amount) + 1
      state.items.splice(idx, 1, {...item, amount})
    } else {
      state.items.push({...item, amount: 1})
    }
    saveCartItemsFromLocalStorage(state.items)
  },

  decreaseCartItem(state, item) {
    const idx = state.items.findIndex(_item => _item.id === item.id)
    if (idx !== -1) {
      const amount = parseInt(state.items[idx].amount) - 1
      if (amount) {
        state.items.splice(idx, 1, {...item, amount})
      } else {
        state.items.splice(idx, 1)
      }
    }
    saveCartItemsFromLocalStorage(state.items)
  },

  updateCartItem(state, item) {
    const idx = state.items.findIndex(_item => _item.id === item.id)
    if (item && typeof item.amount !== 'undefined' && idx !== -1) {
      if (item.amount > 0) {
        state.items.splice(idx, 1, item)
      } else {
        state.items.splice(idx, 1)
      }
      saveCartItemsFromLocalStorage(state.items)
    }
  }
}

export default module