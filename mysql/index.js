
const mysql = require('mysql');
let db = mysql.createPool({ // 连接
  host:'localhost',
  port:'3306',
  user:'root',
  password:'root',
  database:'web'
});
module.exports = (DML,cb) => {
  db.query(DML, (err, data) => {
    if (err) {
      cb && cb ({success:false, data:err})
    } else {
      cb && cb ({success:true,data:JSON.parse(JSON.stringify(data))})
    }
  });
}