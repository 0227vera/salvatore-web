export default (timestamp) => {
  let time = new Date(+timestamp)
  return `${time.getFullYear()}-${(time.getMonth() + 1 + '').padStart(2, '0')}-${(time.getDate() + '').padStart(2, '0')} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
}
