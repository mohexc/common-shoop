import React, { useState, useContext, } from 'react'
// eslint-disable-next-line
import authInstance from '../utils/authClient'
import axios from 'axios'
import { useAuthContext } from './AuthContext'

const Context = React.createContext()
const ProductContext = ({ children }) => {
  // eslint-disable-next-line
  const { user } = useAuthContext()
  // eslint-disable-next-line
  const [timestamp, settimestamp] = useState(Date.now())

  const getProductList = async (keyword = '', pageNumber = '') => {
    try {
      // const products = await authInstance(user).get(`api/products`)
      const { data } = await axios.get(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`)
      debugger
      return {
        complete: true,
        data,
        message: 'Sucess'
      }
    } catch (error) {
      const result = error.response && error.response.data.message
        ? error.response.data.message
        : error.message
      return {
        complete: false,
        message: result,
      }
    }
  }

  const getProduct = async (id) => {
    try {
      // const products = await authInstance(user).get(`api/products`)
      const { data } = await axios.get(`/api/products/${id}`)
      debugger
      return {
        complete: true,
        data,
        message: 'Sucess'
      }
    } catch (error) {
      const result = error.response && error.response.data.message
        ? error.response.data.message
        : error.message
      return {
        complete: false,
        message: result,
      }
    }
  }

  const updateProduct = async (id, values) => {
    try {
      const { data } = await axios.put(`/api/products/${id}`, values)
      debugger
      return {
        complete: true,
        data,
        message: 'Update Product Sucess'
      }
    } catch (error) {
      const result = error.response && error.response.data.message
        ? error.response.data.message
        : error.message
      return {
        complete: false,
        message: result,
      }
    }
  }

  const createProduct = async (values) => {
    try {
      const { data } = await axios.post(`/api/products`, values)
      debugger
      return {
        complete: true,
        data,
        message: 'Create Product Sucess'
      }
    } catch (error) {
      const result = error.response && error.response.data.message
        ? error.response.data.message
        : error.message
      return {
        complete: false,
        message: result,
      }
    }
  }

  const deleteProduct = async (id) => {
    try {
      // const products = await authInstance(user).get(`api/products`)
      const { data } = await axios.delete(`/api/products/${id}`)
      debugger
      return {
        complete: true,
        data,
        message: 'Sucess'
      }
    } catch (error) {
      const result = error.response && error.response.data.message
        ? error.response.data.message
        : error.message
      return {
        complete: false,
        message: result,
      }
    }
  }

  const reloadAuthContext = () => {
    const currentTimestamp = Date.now()
    settimestamp(currentTimestamp)
  }

  return (
    <Context.Provider value={{
      getProductList,
      getProduct,
      updateProduct,
      createProduct,
      deleteProduct,
      reloadAuthContext
    }}>
      {children}
    </Context.Provider>
  )
}

export const useProductContext = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('Cannot use useAuth outside auth provider')
  }
  return context
}

export default ProductContext
