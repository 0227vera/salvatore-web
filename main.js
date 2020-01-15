
const mysql = require('./mysql')
const md5  = require('./utils/md5')
const pId  = require('./utils/produ-id')
const fs = require('fs')
const path = require('path')
const dml = require('./mysql/dml')

module.exports = server => {
  // 登陆注册
  server.post('/web/user', (req,res) => {
    let post = req.body
    if (post.type === 'login') { // 登陆
      mysql(dml.login(post))
      .then(data => {
        if (data.length) {
          res.cookie('webUserId', data[0].id, {
            path:'/',
            maxAge: 60 * 60 * 1000, // ms为单位
            signed: true // 添加签名
          })
          // 把身份写进去
          res.cookie('isType', md5.md5(+data[0].type), {
            path:'/',
            maxAge: 60 * 60 * 1000 // ms为单位
          })
          res.send({success:true, data:data[0]})
        } else {
          res.send({success:false,msg:'用户名密码不匹配'})
        }
        res.end()
      })
      .catch(err => {
        res.send({success:false,msg:'数据库错误'})
        res.end()
      })
    } else if (post.type === 'reg') { //注册
      let id = pId()
      mysql(dml.isExistence(post))
      .then(result => {
        if (result.length) {
          res.send({ success:false,msg:'该用户名或者电话已经被注册，请前去登陆' })
          res.end()
        } else {
          mysql(dml.reg(id,post))
          .then(data => {
            res.cookie('webUserId', id, {
              path:'/',
              maxAge: 60 * 60 * 1000, // ms为单位
              signed: true // 添加签名
            })
            res.cookie('isType', md5.md5(0), {
              path:'/',
              maxAge: 60 * 60 * 1000 // ms为单位
            })
            res.send({ success:true, data:{ type:0,id } })
            res.end()
          })
          .catch(err => {
            res.send({success:false,msg:'数据库错误'})
            res.end()
          })
        }
      })
      .catch(err => {
        res.send({success:false,msg:'数据库错误'})
        res.end()
      })
    } else if (post.type === 'logout') { // 登出
      res.clearCookie('isType')
      res.clearCookie('webUserId')
      res.send({success:true})
      res.end()
    };
  });
  // 管理员页面
  server.get('/web/admin', (req,res) => {
    let get = req.query
    mysql(dml.getTable(get))
    .then(data => {
      mysql(dml.getCount())
      .then(count => {
        res.send({success:true,data,...count[0]})
        res.end()
      })
      .catch(err=>{
        res.send({success:false,msg:'数据库错误'})
        res.end()
      })
    })
    .catch(err => {
      res.send({success:false,msg:'数据库错误'})
      res.end()
    })
  });
  // 文件上传
  server.use('/web/upload', (req,res) => {
    const length = req.files.length
    let count = 0;
    let result = []
    req.files.forEach(item => {
      let extname = path.extname(item.originalname)
      let name = path.resolve(item.path)
      fs.rename(name,`${name}${extname}`,(err, data) => {
        if (err) {
          res.send({success:false,msg:'文件写入失败'})
          res.end()
        } else {
          count++;
          result.push({...item, filename:`${item.filename}${extname}`})
          if (length === count) {
            res.send({success:true,data:result})
            res.end()
          }
        }
      })
    })
  })
  // 设置里面的信息
};