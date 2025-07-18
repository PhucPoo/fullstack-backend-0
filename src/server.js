const express = require('express')
const path = require('path')
// console.log('>>>check env', process.env)

require('dotenv').config()

const app = express()
const port = process.env.PORT || 8081

const hostname = process.env.HOST_NAME


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('Hello HP vua! and nodemon')
})
app.get('/abc', (req, res) => {
  res.send('Hello !')
})
app.get('/hp', (req, res) => {
  res.send('<h1>HP dep zai</h1>')
})

app.get('/sample', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
