import mongoose from 'mongoose'

const shippingAddressSchema = mongoose.Schema(
  {
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const Review = mongoose.model('Review', shippingAddressSchema)

export default Review