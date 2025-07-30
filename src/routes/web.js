const e = require('express')
const express = require('express')
const { getHome,  postCreateUser, getCreatePage, getEditPage,postUpdateUser,postDeleteUser,postRemoveUser } = require('../controllers/homeCotroller')


const router = express.Router()

router.get('/', getHome)

router.post('/create-user', postCreateUser)


router.get('/create', getCreatePage)

router.get('/edit/:id', getEditPage)
router.post('/update-user', postUpdateUser)

router.post('/delete-user/:id', postDeleteUser)
router.post('/remove-user', postRemoveUser)





module.exports = router