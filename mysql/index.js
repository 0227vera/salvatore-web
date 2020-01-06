
const mysql = require('mysql');
let db = mysql.createPool({ // 连接
  host:'localhost',
  port:'3306',
  user:'root',
  password:'root',
  database:'web'
});
module.exports = (DML,cb) => {
  return new Promise ((resolve,reject) => {
    db.query(DML, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(JSON.parse(JSON.stringify(data)))
      }
    });
  });
}