import express from 'express'
const router = express.Router()
import {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder
} from '../controllers/orderControllers.js'
import { protect, admin } from '../middlewares/authMiddlewares.js'

router.route('/').get(getOrders)
router.route('/:id').get(getOrder)
router.route('/').post(createOrder)
router.route('/:id').put(updateOrder)
router.route('/:id').delete(deleteOrder)

export default router
