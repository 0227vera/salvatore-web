export default {
  get (key) {
    let arr = document.cookie.split(';')
    let obj = {}
    arr.forEach(item => {
      let kv = item.split('=')
      let key = kv[0] && kv[0].trim()
      let value = kv[1] && kv[1].trim()
      obj[key] = value
    })
    return obj[key]
  },
  remove (key) {
    document.cookie = `${key}=''`
  }

}
