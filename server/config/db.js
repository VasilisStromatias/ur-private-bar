const mysql = require('mysql');
const db = myslq.createConnection({
    host:"localhost",
    user:"root",
    passwword:"",
    database:"eshop-db"
})

module.exports = db;