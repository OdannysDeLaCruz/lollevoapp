import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
    user: []
  },
  getters: {
    getCart(state) {
        return state.cart
    },
    getUser(state)  {
      return state.user
    }
  },
  mutations: {
    addProductToCart(state, payload) {
      (state as any).cart.push(payload)
    },
    loginUser(state, payload) {
      state.user = payload
    },
    logoutUser(state) {
      state.user = []
    }
  },
  actions: {
  },
  modules: {
  }
})
