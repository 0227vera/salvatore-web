module.exports = {
  getTable(get){
  let time=''
  if (get.c_time) {
    let time = get.c_time.split('-')
    s_time = time[0]
    e_time = time[1]
    time += `AND c_time > ${s_time} AND c_time < ${e_time}`
  }
  return `SELECT * FROM USER WHERE user like '%${get.user}%' AND phone like '%${get.phone}%' ${time} order by c_time desc LIMIT ${(get.current - 1) * get.size}, ${get.size};`
  },
  getCount () {
    return `SELECT COUNT(user) total FROM USER` 
  }
}