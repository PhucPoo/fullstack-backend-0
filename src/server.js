const express = require('express')
const path = require('path')
const app = express()
const port = 8081

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello HP vua!')
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
