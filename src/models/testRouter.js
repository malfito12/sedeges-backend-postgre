const express=require('express')
const router=express.Router()
const testControllers=require('../controllers/testsController')

router.get('/tests',testControllers.getTests)
router.get('/test/:id',testControllers.getTest)
router.get('/testsStatus',testControllers.getTestsStatus)
router.post('/test',testControllers.postTest)
router.put('/test/:id',testControllers.updateTest)
router.delete('/test/:id',testControllers.deleteTest)


router.get('/testsAptitudesStatus',testControllers.getTestsAptitudesStatus)

module.exports=router