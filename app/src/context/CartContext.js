import React, { useState, useContext, useEffect } from 'react'
import Axios from 'axios'
import _ from 'lodash'

const Context = React.createContext()
const CartContext = ({ children }) => {

  const [cart, setCart] = useState()
  const [timestamp, settimestamp] = useState(Date.now())


  const reloadCartContext = () => {
    const currentTimestamp = Date.now()
    settimestamp(currentTimestamp)
  }

  return (
    <Context.Provider value={{
      cart,
      reloadCartContext
    }}>
      {children}
    </Context.Provider>
  )
}

export const useCartContext = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('Cannot use useCartContext outside auth provider')
  }
  return context
}

export default CartContext
