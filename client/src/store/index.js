import Vue from 'vue'
import Vuex from 'vuex'
import navData from './navData'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabIndex: 0,
    isLogin: false,
    nav: []
  },
  mutations: {
    'CHANGE-TAB-INDEX': (state, data) => {
      state.tabIndex = data
    },
    'IS-LOGIN': (state, data) => {
      state.isLogin = data
      let lastIndex = state.nav.length - 1
      state.nav[lastIndex] && (state.nav[lastIndex].name = data ? '登出/退出' : '登陆/注册')
    },
    'IS-ADMIN': (state, data) => {
      state.nav = data ? navData.admin : navData.notAdmin
    }
  },
  actions: {
    ISADMIN: ({ commit, state }) => {

    }
  },
  modules: {
  }
})
