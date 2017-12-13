import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      refreshToken: 0,
      user: null
    },
    mutations: {
      refreshToken (state, refreshToken) {
        state.refreshToken = refreshToken
      },

      user (state, user) {
        state.user = user
      }
    }
  })
}

export default createStore
