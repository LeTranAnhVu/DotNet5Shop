import Store from './store'
import cartModule from './modules/cart'
const modules = [
  cartModule
]

const store = new Store(modules)

export default store