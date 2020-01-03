import Axios from './Axios'

export default {
  /**
   *
   * @param {*
   * type: login 登陆请求
   *        reg 注册请求
   * 其他为常规数据
   * } data
   */
  user (data) {
    return Axios({
      method: 'post',
      name: '登陆注册',
      url: '/user',
      data
    })
  }
}
