import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: 0 // 0 --> 未登录 1 --> 可以跳转的情况 2 --> 已经登陆可以跳转
  },
  mutations: {
    'IS-LOGIN': (state, data) => {
      state.login = data
    }
  },
  actions: {
  },
  modules: {
  }
})
