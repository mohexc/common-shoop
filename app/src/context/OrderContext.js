import React, { useState, useContext, useEffect } from 'react'
import Axios from 'axios'
import _ from 'lodash'

const Context = React.createContext()
const ProductContext = ({ children }) => {

  const [token, _settoken] = useState(localStorage.getItem('token'))
  const [products, setProducts] = useState()
  const [timestamp, settimestamp] = useState(Date.now())

  useEffect(() => {

  }, [])


  const reloadProductContext = () => {
    const currentTimestamp = Date.now()
    settimestamp(currentTimestamp)
  }

  return (
    <Context.Provider value={{
      products,
      reloadAuthContext
    }}>
      {children}
    </Context.Provider>
  )
}

export const useProductContext = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('Cannot use useProductContext outside auth provider')
  }
  return context
}

export default ProductContext
