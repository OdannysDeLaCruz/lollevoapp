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
    getUser(state: any)  {
      return state.user.length ? state.user[0] : false
    },
    getUserId(state: any)  {
      return state.user[0].id
    }
  },
  mutations: {
    addProductToCart(state: any, payload) {
      (state as any).cart.push(payload)
    },
    loginUser(state: any, payload) {
      state.user = payload
    },
    logoutUser(state: any, payload: any) {
      state.user = payload
    },
    clearCart(state: any, payload: any) {
      state.cart = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
