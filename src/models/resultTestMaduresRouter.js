const express=require('express')
const router=express.Router()
const maduresControllers=require('../controllers/resultsTestMadures')

router.post('/post-result-madurez-t1',maduresControllers.post_result_test1)
router.post('/post-result-madurez-t2',maduresControllers.post_result_test2)

module.exports=router