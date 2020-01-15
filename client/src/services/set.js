import Axios from './Axios'
export default {
  leftSave (params) {
    return Axios({
      url: '/set',
      name: '保存首页应该展示的信息',
      params
    })
  }
}
