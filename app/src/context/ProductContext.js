import React, { useState, useContext, useEffect } from 'react'
import Axios from 'axios'
import _ from 'lodash'

const Context = React.createContext()
const AuthContext = ({ children }) => {
  const [products, setProducts] = useState()
  const [timestamp, settimestamp] = useState(Date.now())

  const getProductList = async () => {

  }

  const getProduct = async (id) => {

  }

  const updateProduct = async (id) => {

  }

  const createProduct = async () => {

  }

  const deleteProduct = async () => {

  }

  const reloadAuthContext = () => {
    const currentTimestamp = Date.now()
    settimestamp(currentTimestamp)
  }

  return (
    <Context.Provider value={{
      products,
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

export const useAuthContext = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('Cannot use useAuth outside auth provider')
  }
  return context
}

export default AuthContext
