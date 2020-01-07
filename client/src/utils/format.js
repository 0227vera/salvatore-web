export default (timestamp = new Date().getTime()) => {
  let time = new Date(+timestamp)
  return `${time.getFullYear()}-${(time.getMonth() + 1 + '').padStart(2, '0')}-${(time.getDate() + '').padStart(2, '0')} ${(time.getHours() + '').padStart(2, '0')}:${(time.getMinutes() + '').padStart(2, '0')}:${(time.getSeconds() + '').padStart(2, '0')}`
}
