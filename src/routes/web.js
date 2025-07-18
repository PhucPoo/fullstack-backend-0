const e = require('express')
const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello HP vua! and nodemon')
})
router.get('/abc', (req, res) => {
  res.send('Hello !')
})
router.get('/hp', (req, res) => {
  res.send('<h1>HP dep zai</h1>')
})

router.get('/sample', (req, res) => {
  res.render('sample.ejs')
})
module.exports = router