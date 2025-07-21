const e = require('express')
const express = require('express')
const { getHome, getAbc, getHp, getSample, postCreateUser } = require('../controllers/homeCotroller')


const router = express.Router()

router.get('/', getHome)

router.post('/create-user', postCreateUser)


router.get('/abc', getAbc)


router.get('/hp', getHp)

router.get('/sample', getSample)
module.exports = router