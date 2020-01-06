import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabIndex: 0,
    isLogin: false,
    isAdmin: false
  },
  mutations: {
    'CHANGE-TAB-INDEX': (state, data) => {
      state.tabIndex = data
    },
    'IS-LOGIN': (state, data) => {
      state.isLogin = data
    },
    'IS-ADMIN': (state, data) => {
      state.isAdmin = data
    }
  },
  actions: {
  },
  modules: {
  }
})
