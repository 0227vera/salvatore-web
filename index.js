const express = require('express');
const static = require('express-static'); 
const appRouter = require('./main.js');
const cookieParser = require('cookie-parser');
const secret = 'aghahgaljdsfhajgha'
const bodyParser = require('body-parser');
const multer = require('multer');
const objMulter = multer({
  dest: './www/upload/',
  limit: 2 * 1024 * 1024 // 文件大小
});
// 规定上下文
const content = '/web'
// 启动服务
let server = express();
// 端口监听
server.listen(9090);
// 处理post请求数据
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
// 文件上传
server.use(objMulter.any());
// cookie
server.use(cookieParser(secret));

// 所有的接口在main中写
appRouter(server)
// 静态文件的地址
server.use(static('./www'));