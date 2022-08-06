const express=require('express')
const router=express.Router()
const usersControllers=require('../controllers/usersController')

router.get('/users',usersControllers.getUsers)
router.get('/user/:id',usersControllers.getUser)
router.post('/users',usersControllers.postUsers)
router.put('/users/:id',usersControllers.editUser)
router.delete('/users/:id',usersControllers.deleteUser)

router.put('/user-update-email/:id',usersControllers.updateEmail)
router.put('/user-match-password/:id',usersControllers.updatePassword)

module.exports=router