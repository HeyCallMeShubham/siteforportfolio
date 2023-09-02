
const express = require('express');
const { registerUser, login, auth } = require('../controllers');



const router = express.Router()




router.post('/register', registerUser)

router.post('/login', login)

router.get('/authuser', auth)







 module.exports = router
