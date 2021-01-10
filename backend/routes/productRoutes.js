import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productControllers.js'
import { protect, admin } from '../middlewares/authMiddlewares.js'

router.route('/').get(getProducts)
router.route('/:id').get(getProduct)
router.route('/').post(createProduct)
router.route('/:id').put(updateProduct)
router.route('/:id').delete(deleteProduct)

export default router
