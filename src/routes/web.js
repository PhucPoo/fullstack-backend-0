const e = require('express')
const express = require('express')
const { getHome,  postCreateUser, getCreatePage, getEditPage,postUpdateUser,getUserById } = require('../controllers/homeCotroller')


const router = express.Router()

router.get('/', getHome)

router.post('/create-user', postCreateUser)


router.get('/create', getCreatePage)

router.get('/edit/:id', getEditPage)
router.post('/update-user', postUpdateUser)




module.exports = router