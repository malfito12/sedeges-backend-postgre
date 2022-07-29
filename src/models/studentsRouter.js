const express=require('express')
const router=express.Router()
const studentsController=require('../controllers/studentsController')

router.get('/students', studentsController.getStudents)
router.post('/student',studentsController.postStudent)
router.put('/student/:id',studentsController.updateStudent)
router.delete('/student/:id',studentsController.deleteStudent)

module.exports=router