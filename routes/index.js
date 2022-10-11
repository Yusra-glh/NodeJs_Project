const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()

router.get('/', (req, res)=>{
   res.send('Hello World') 
})

router.get('/dashboard', (req, res)=>{
   res.send('dashboard') 
})

//@desc Adding new user
//@route POST /adduser
router.post('/adduser', actions.addNew)

//@desc Authenticate a user
//@route POST /authenticate
router.post('/authenticate', actions.authenticate)

//@desc get user's info 
//@route get /getinfo
router.get('/getinfo', actions.getinfo)
//commit

module.exports=router