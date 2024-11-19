const router = require('express').Router()
const {createUser, verifyUser, verified} = require('../controllers/user.controller')

router.post('/create',createUser)
router.post('/verify',verifyUser)
router.post('/verified',verified)