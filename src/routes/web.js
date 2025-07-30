const e = require('express')
const express = require('express')
const { getHome,  postCreateUser, getCreatePage, getEditPage,postUpdateUser,getDeleteUser,postRemoveUser } = require('../controllers/homeCotroller')


const router = express.Router()

router.get('/', getHome)

router.post('/create-user', postCreateUser)


router.get('/create', getCreatePage)

router.get('/edit/:id', getEditPage)
router.post('/update-user', postUpdateUser)

router.get('/delete-user/:id', getDeleteUser)
router.post('/remove-user', postRemoveUser)





module.exports = router