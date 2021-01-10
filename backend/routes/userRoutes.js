import express from 'express'
const router = express.Router()
import {
  login,
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/userControllers.js'
import { protect, admin } from '../middlewares/authMiddlewares.js'

router.route('/signin').post(login)
router.route('/signup').post(createUser)
router.route('/').get(getUsers)
router.route('/:id').get(getUser)
router.route('/:id').put(updateUser)
router.route('/:id').delete(deleteUser)

export default router
