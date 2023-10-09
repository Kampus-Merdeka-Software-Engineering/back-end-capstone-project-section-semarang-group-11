import express from 'express'
import PromoController from '../controllers/PromoController.js';

const router = express.Router()

router.get('/promos', PromoController.index)
router.post('/promos', PromoController.storePromo)
// router.put('/promos/:id', PromoController.updatePromo)
router.delete('/promos/:id', PromoController.deletePromo)

export default router