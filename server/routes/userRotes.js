import express from 'express'
const router = express.Router()
import {
  login,
  logout,
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(login)
router.route('/').get(logout)
router.route('/').post(createUser)
router.route('/').get(getUsers)
router.route('/:id').get(getUser)
router.route('/:id').put(updateUser)
router.route('/:id').delete(deleteUser)

export default router
