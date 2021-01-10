import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModels.js'

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    res.status(401)
    throw new Error('Invalid email or password')
  }

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user._id),
  })

})

const createUser = asyncHandler(async (req, res) => {
  res.json(req.body)
  const { name, email, password } = req.body
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({ name, email, password, })

  if (!user) {
    res.status(400)
    throw new Error('Invalid user data')
  }

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user._id),
  })
})

const getUsers = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
      name: {
        $regex: req.query.keyword,
        $options: 'i',
      },
    }
    : {}

  const count = await User.countDocuments({ ...keyword })
  const users = await User
    .find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ users, count })
})

const getUser = asyncHandler(async (req, res) => {

})

const updateUser = asyncHandler(async (req, res) => {

})

const deleteUser = asyncHandler(async (req, res) => {

})


export {
  login,
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
}