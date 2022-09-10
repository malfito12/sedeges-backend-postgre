const express=require('express')
const router=express.Router()
const receptionsController=require('../controllers/receptionsController')

router.get('/get-receptions',receptionsController.getReceptions)
router.post('/post-reception',receptionsController.postReceptions)
router.put('/update-reception/:id',receptionsController.updateReceptions)
router.delete('/delete-reception/:id',receptionsController.deleteReceptions)

router.get('/get-students-reception/:id',receptionsController.getStudentsReception)

module.exports=router