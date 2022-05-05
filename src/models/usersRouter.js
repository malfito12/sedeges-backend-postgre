const express=require('express')
const router=express.Router()
const usersControllers=require('../controllers/usersController')

router.get('/users',usersControllers.getUsers)
// router.get('/user/:id',tasksControllers.getTask)
router.post('/users',usersControllers.postUsers)
// router.put('/user/:id',tasksControllers.putTasks)
// router.delete('/user/:id',tasksControllers.deleteTasks)

module.exports=router