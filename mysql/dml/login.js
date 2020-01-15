module.exports = {
  login (post) {
    return `SELECT id,type FROM USER WHERE (user = '${post.user}' OR phone = '${post.user}') and pass='${post.pass}';`
  },
  isExistence (post) {
    return `SELECT id,type FROM USER WHERE user = '${post.user}' OR phone = '${post.phone}';`
  },
  reg (id, post) {
    return `INSERT INTO USER(id,user,pass,phone) VALUES ('${id}','${post.user}','${post.pass}','${post.phone}');`
  }
}