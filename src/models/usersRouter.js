const express=require('express')
const router=express.Router()
const usersControllers=require('../controllers/usersController')

router.get('/users',usersControllers.getUsers)
router.get('/user/:id',usersControllers.getUser)
router.post('/users',usersControllers.postUsers)
router.put('/users/:id',usersControllers.editUser)
router.delete('/users/:id',usersControllers.deleteUser)

module.exports=router