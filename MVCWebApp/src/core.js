import './sass/core.scss'
import store from './store'
import HeaderHandler from './components/headerHandler'

window.$store =  store

window.$store.commit('loadCartItem')
const header = new HeaderHandler()
header.run()
