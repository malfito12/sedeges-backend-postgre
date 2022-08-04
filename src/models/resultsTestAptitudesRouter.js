const express=require('express')
const router=express.Router()
const resultAptitudesController=require('../controllers/resultsTestAptitudes')

router.post('/test-aptitudes', resultAptitudesController.post_result_test_aptitudes)
router.get('/test-aptitudes-students/:id', resultAptitudesController.getListStudentAptitud)
// router.get('/test-aptitudes-students-results/:id', resultAptitudesController.getStudentResultAptitud)
router.post('/test-aptitudes-students-results', resultAptitudesController.getStudentResultAptitud)

module.exports=router