require('dotenv').config()
const express = require('express')
// console.log('>>>check env', process.env)
const configViewEngine = require('./config/viewEngine')

const webRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT || 8081

const hostname = process.env.HOST_NAME

configViewEngine(app)


app.use('/',webRoutes)


app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
