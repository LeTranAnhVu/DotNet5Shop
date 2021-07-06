import './sass/core.scss'
import store from './store'
import HeaderHandler from './components/headerHandler'
import SubPub from './utils/subPub'
window.$store =  store
window.$subPub =  new SubPub()

window.$store.commit('loadCartItem')

const header = new HeaderHandler()
header.run()
