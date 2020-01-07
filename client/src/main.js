import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI, { Loading, Message, MessageBox } from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import cookie from '@/utils/cookies'
import md5 from '@/utils/md5.js'

/* 在全局注册v-loading使用  */
Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$prompt = MessageBox.prompt

Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  // 先登陆或者注册才能够看见其他页面
  if (cookie.get('webUserId')) { // 已经登陆
    store.commit('IS-LOGIN', true)
    if (cookie.get('isType') === md5.md5(1)) {
      store.commit('IS-ADMIN', true)
    } else {
      store.commit('IS-ADMIN', false)
    }
    let index = store.state.nav.findIndex(item => item.path === to.path)
    if (index !== -1) {
      store.commit('CHANGE-TAB-INDEX', index)
      next()
    } else {
      store.commit('CHANGE-TAB-INDEX', 0)
      if (to.path !== '/home') {
        next({ path: '/home' })
      }
    }
  } else { // 未登陆
    // 进入的是登陆页面或者首页的展示直接跳
    store.commit('IS-LOGIN', false)
    store.commit('IS-ADMIN', false)
    if (to.path === '/login' || to.path === '/home') {
      if (to.path === '/login') {
        store.commit('CHANGE-TAB-INDEX', store.state.nav.length - 1)
      } else {
        store.commit('CHANGE-TAB-INDEX', 0)
      }
      next()
    } else { // 不是的话跳到登陆页面
      store.commit('CHANGE-TAB-INDEX', store.state.nav.length - 1)
      next({ path: '/login' })
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
