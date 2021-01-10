import asyncHandler from 'express-async-handler'
import Order from '../models/orderModels.js'

// @desc    Fetch all orders
// @route   GET /api/orders/
// @access  Public
const getOrders = asyncHandler(async (req, res) => {

})

// @desc    Fetch single order
// @route   GET /api/orders/:id
// @access  Public
const getOrder = asyncHandler(async (req, res) => {

})

// @desc    Create a order
// @route   POST /api/orders
// @access  Private/Admin
const createOrder = asyncHandler(async (req, res) => {

})

// @desc    Update a order
// @route   PUT /api/orders/:id
// @access  Private/Admin
const updateOrder = asyncHandler(async (req, res) => {

})

// @desc    Delete a order
// @route   DELETE /api/orders/:id
// @access  Private/Admin
const deleteOrder = asyncHandler(async (req, res) => {

})


export {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder
}