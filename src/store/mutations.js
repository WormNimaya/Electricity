import * as types from './mutation-types'
const mutations = {
  [types.SET_USERNAME](state, username){
    state.username = username
  },
  [types.SET_CART_COUNT](state, cartCount){
    state.cartCount = cartCount
  }
}

export default mutations