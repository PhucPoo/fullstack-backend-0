const e = require('express')
const express = require('express')
const { getHome, getAbc, getHp, getSample, postCreateUser, getCreatePage } = require('../controllers/homeCotroller')


const router = express.Router()

router.get('/', getHome)

router.post('/create-user', postCreateUser)


router.get('/abc', getAbc)


router.get('/create', getCreatePage)


router.get('/hp', getHp)

router.get('/sample', getSample)
module.exports = router