
require('dotenv').config()
const express = require('express')
// console.log('>>>check env', process.env)
const configViewEngine = require('./config/viewEngine')

const webRoutes = require('./routes/web')

const pool = require('./config/database')

const app = express()
const port = process.env.PORT || 8081

const hostname = process.env.HOST_NAME

configViewEngine(app)


app.use('/', webRoutes)


pool.connect()
  .then(() => {
    console.log('Connected to PostgreSQL');
    return pool.query('SELECT * FROM users');
  })
  .then(res => {
    console.log('Dữ liệu trong bảng users:');
    console.table(res.rows);
  })
  .catch(err => {
    console.error('Lỗi kết nối hoặc truy vấn:', err.stack);
  })
  
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
