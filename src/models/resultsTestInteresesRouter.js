const express=require('express')
const router=express.Router()
const resultAptitudesController=require('../controllers/resultsTestIntereses')

router.post('/test-intereses', resultAptitudesController.post_result_test_intereses)
router.get('/test-intereses-students/:id', resultAptitudesController.getListStudentInteres)
// // router.get('/test-aptitudes-students-results/:id', resultAptitudesController.getStudentResultAptitud)
router.post('/test-intereses-students-results', resultAptitudesController.getStudentResultInteres)

module.exports=router