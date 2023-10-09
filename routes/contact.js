import express from 'express'
import ContactController from '../controllers/ContactController.js';

const router = express.Router()

router.get('/contacts', ContactController.index)
router.post('/contacts', ContactController.storeContact)
// router.put('/contacts/:id', ContactController.updateContact)
router.delete('/contacts/:id', ContactController.deleteContact)

export default router