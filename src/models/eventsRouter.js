const express=require('express')
const router=express.Router()
const eventsController=require('../controllers/eventsController')

router.post('/post-event',eventsController.postEvent)
router.get('/get-events',eventsController.getEvents)
router.put('/update-event/:id',eventsController.updateEvent)
router.get('/get-event-status',eventsController.getEventStatus)
router.delete('/event/:id',eventsController.deleteEvent)

router.get('/get-result-type-test-aptitudes',eventsController.getResultTypeTestAptitudes)
router.get('/list-student-event/:id',eventsController.getListStudentsResults)

module.exports=router