const express=require('express')
const router=express.Router()
const maduresControllers=require('../controllers/resultsTestMadures')

router.post('/post-result-madurez-t1',maduresControllers.post_result_test1)
router.post('/post-result-madurez-t2',maduresControllers.post_result_test2)
router.post('/post-result-madurez-t3',maduresControllers.post_result_test3)
router.post('/post-result-madurez-t4',maduresControllers.post_result_test4)
router.post('/post-result-madurez-t5-parte1',maduresControllers.post_result_test5_parte1)
router.post('/post-result-madurez-t5-parte2',maduresControllers.post_result_test5_parte2)
router.post('/post-result-madurez-t6',maduresControllers.post_result_test6)
router.post('/post-result-madurez-t7',maduresControllers.post_result_test7)


router.get('/get-result-madurez-student',maduresControllers.getResultsMadurezStudent)

module.exports=router