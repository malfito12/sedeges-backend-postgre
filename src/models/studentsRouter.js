const express=require('express')
const router=express.Router()
const studentsController=require('../controllers/studentsController')

router.get('/students', studentsController.getStudents)
router.get('/student/:id', studentsController.getStudent)
router.post('/student',studentsController.postStudent)
router.put('/student-update/:id',studentsController.updateStudent)
router.delete('/student-delete/:id',studentsController.deleteStudent)

module.exports=router