const express=require('express')
const router=express.Router()
const tasksControllers=require('../controllers/tasksController')

router.get('/tasks',tasksControllers.getTasks)
router.get('/tasks/count',tasksControllers.getTaskCount)
router.get('/task/:id',tasksControllers.getTask)
router.post('/tasks',tasksControllers.postTasks)
router.put('/tasks/:id',tasksControllers.putTasks)
router.delete('/tasks/:id',tasksControllers.deleteTasks)

module.exports=router