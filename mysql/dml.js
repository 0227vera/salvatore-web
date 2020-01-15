const login = require('./dml/login')
const admin = require('./dml/admin')

module.exports = { ...login, ...admin } 