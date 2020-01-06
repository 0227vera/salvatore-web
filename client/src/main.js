import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI, { Loading, Message, MessageBox } from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import isLogin from '@/utils/cookies'

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
  if (isLogin('webUserId')) { // 已经登陆
    store.commit('IS-LOGIN', true)
    next()
  } else { // 未登陆
    // 进入的是登陆页面或者首页的展示直接跳
    if (to.path === '/login' || to.path === '/home') {
      if (to.path === '/login') {
        store.commit('CHANGE-TAB-INDEX', 4)
      } else {
        store.commit('CHANGE-TAB-INDEX', 0)
      }
      next()
    } else { // 不是的话跳到登陆页面
      store.commit('CHANGE-TAB-INDEX', 4)
      next({ name: 'login' })
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
