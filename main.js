
const mysql = require('./mysql')
const md5  = require('./utils/md5')
const pId  = require('./utils/produ-id')

module.exports = server => {
  // 路由的主入口
  server.use('/web/user', (req,res) => {
    let post = req.body
    if (post.type === 'login') { // 登陆
      mysql(`SELECT id,type FROM USER WHERE (user = '${post.user}' OR phone = '${post.user}') and pass='${post.pass}';`, data => {
        if (data.success) {
          if (data.data.length) {
            res.cookie('webUserId', data.data[0].id,{
              path:'/',
              maxAge: 60 * 60 * 1000, // ms为单位
              signed: true // 添加签名
            })
            res.send({success:true, data:data.data[0] })
          } else {
            res.send({success:false,msg:'用户名密码不匹配'})
          }
        } else {
          res.send({success:false,msg:'数据库错误'})
        }
        res.end()
      })
    } else if (post.type === 'reg') { //注册
      let id = pId()
      mysql(`SELECT id,type FROM USER WHERE user = '${post.user}' OR phone = '${post.phone}';`, result => {
        if (result.success) {
          if (result.data.length) { // 如果能够查出来表示已经注册过了
            res.send({success:false,msg:'该用户名或者电话已经被注册，请前去登陆'})
            res.end()
          } else { // 否则表示没有注册过
            mysql(`INSERT INTO USER(id,user,pass,phone) VALUES ('${id}','${post.user}','${post.pass}','${post.phone}');`, data => {
              if (data.success) {
                res.cookie('webUserId', id, {
                  path:'/',
                  maxAge: 60 * 60 * 1000, // ms为单位
                  signed: true // 添加签名
                })
                res.send({success:true, data:{type:post.type,id} })
              } else {
                res.send({success:false,msg:'数据库错误'})
              }
              res.end()
            })
          }
        } else { // 新的注册用户
          res.send({success:false,msg:'数据库错误'})
          res.end()
        }
      })
      
    };
  })
};