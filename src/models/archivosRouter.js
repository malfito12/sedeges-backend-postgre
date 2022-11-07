const express=require('express')
const router=express.Router()
const eventsController=require('../controllers/archivosControllers')

router.get('/get-archivos',eventsController.getArchivos)
router.post('/post-archivos',eventsController.postArchivos)
router.delete('/delete-archivo/:id',eventsController.deleteArchivo)

module.exports=router