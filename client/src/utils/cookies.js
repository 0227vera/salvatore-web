export default function isLogin (key) {
  let arr = document.cookie.split(';')
  let obj = {}
  arr.forEach(item => {
    let kv = item.split('=')
    obj[kv[0].trim()] = kv[1].trim()
  })
  return obj[key]
}
