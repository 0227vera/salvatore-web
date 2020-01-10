import Vue from 'vue'
import Vuex from 'vuex'
import navData from './navData'
import cookie from '@/utils/cookies'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabIndex: 0, // 当前导航栏的active项
    isLogin: false, // 是否登陆
    nav: [], // 根据不同的情况不同的导航栏
    currentUserId: '' // 当前用户的id

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
      state.nav = state.isLogin ? (data ? navData.admin : navData.notAdmin) : navData.notLogin
    },
    'CURRENT-USER-ID': (state, data) => {
      state.currentUserId = data
    }
  },
  actions: {
    auth ({ commit, state }) {
      let signCookie = cookie.get('webUserId')
      if (signCookie) {
        let id = signCookie.split('.')[0].slice(4)
        state.currentUserId = id
      } else {
        state.currentUserId = ''
      }
    }
  },
  modules: {
  }
})
