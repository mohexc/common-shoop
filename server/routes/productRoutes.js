import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productControllers'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts)
router.route('/:id').get(getProduct)
router.route('/').post(createProduct)
router.route('/:id').put(updateProduct)
router.route('/:id').delete(deleteProduct)

export default router
