export class CartItem {
  constructor(item) {
    this.id = item.id
    this.name = item.name
    this.quality = item.quality
  }
}

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

export default class Cart {
  _items = []

  constructor(items, autoSave = true) {
    this._items = items
  }

  addItem(item) {
    const exist = this._items.some(_item => _item.id === item.id)
    if (!exist) {
      this._items.push({...item, amount: 1})
      return true
    }

    return false
  }

  removeItem(item) {
    const idx = this._items.findIndex(_item => _item.id === item.id)
    if (idx !== -1) {
      this._items.splice(idx, 1)
      return true
    }
    return false
  }

  increaseItem(item) {
    const idx = this._items.findIndex(_item => _item.id === item.id)
    if (idx !== -1) {
      const amount = parseInt(this._items[idx].amount) + 1
      this._items.splice(idx, 1, {...item, amount})
    } else {
      this.addItem(item)
    }

    saveCartItemsFromLocalStorage(this._items)
  }

  decreaseItem(item) {
    const idx = this._items.findIndex(_item => _item.id === item.id)
    if (idx !== -1) {
      const amount = parseInt(this._items[idx].amount) - 1
      if (amount) {
        this._items.splice(idx, 1, {...item, amount})
      } else {
        this.removeItem(item)
      }
    }

    saveCartItemsFromLocalStorage(this._items)
  }

  updateItem(item) {
    const idx = this._items.findIndex(_item => _item.id === item.id)
    if (item && typeof item.amount !== 'undefined' && idx !== -1) {
      if (item.amount > 0) {
        this._items.splice(idx, 1, item)
      } else {
        this.removeItem(item)
      }
      saveCartItemsFromLocalStorage(this._items)
      return true
    }

    return false
  }
}