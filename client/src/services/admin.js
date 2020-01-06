import Axios from './Axios'

export default {
  getMembers (params) {
    return Axios({
      url: '/admin',
      name: '获取已经注册的人员信息',
      params
    })
  }
}
