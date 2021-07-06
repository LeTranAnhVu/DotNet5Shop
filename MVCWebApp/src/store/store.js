import _ from 'lodash'

export class StoreModule{
  name= ''
  state= {}
  mutations={}
  getters={}
  actions={}
}

export default class Store {
  _modules = [new StoreModule()]
  _context = {
    state: {},
    getters: {},
    mutations: {},
    actions: {}
  }
  constructor(modules) {
    this._modules = modules
    this._flatModules()
  }

  _flatModules() {
    this._modules.forEach(module => {
      const {state, mutations, actions, getters} = module
      this._context.state[module.name || 'unknown'] = {...this._context.state, ...state}
      this._context.getters = _.mergeWith(this._context.getters, getters, (objValue, srcValue) => {
        if (objValue && srcValue) {
          return [objValue, srcValue]
        }
      })
      this._context.mutations = _.mergeWith(this._context.mutations, mutations, (objValue, srcValue) => {
        if (objValue && srcValue) {
          return [objValue, srcValue]
        }
      })
      this._context.actions = _.mergeWith(this._context.actions, actions, (objValue, srcValue) => {
        if (objValue && srcValue) {
          return [objValue, srcValue]
        }
      })
    })
  }

  getters(getterName, payload) {
    return this._context.getters[getterName](this, payload)
  }
  /**
   * Dispatch action
   */
  dispatch(actionName, payload){
    return this._context.actions[actionName](this, payload)
  }

  /**
   * Call mutation
   */
  commit(mutationName, payload){
    return this._context.mutations[mutationName](this, payload)
  }
}
