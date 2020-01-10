export default {
  admin: [
    { name: '首页', path: '/home' },
    { name: '数据统计', path: '/chars' },
    { name: '内容页面', path: '/content' },
    { name: '管理员', path: '/admin' },
    { name: '我的设置', path: '/set' },
    { name: '登陆/注册', path: '/login' }
  ],
  notAdmin: [
    { name: '首页', path: '/home' },
    { name: '数据统计', path: '/chars' },
    { name: '内容页面', path: '/content' },
    { name: '我的设置', path: '/set' },
    { name: '登陆/注册', path: '/login' }
  ],
  notLogin: [
    { name: '首页', path: '/home' },
    { name: '登陆/注册', path: '/login' }
  ]
}
