import React, { useState, useContext, useEffect } from 'react'
import Axios from 'axios'
import _ from 'lodash'

const Context = React.createContext()
const CartContext = ({ children }) => {

  const [token, _settoken] = useState(localStorage.getItem('token'))
  const [user, setuser] = useState()
  const [timestamp, settimestamp] = useState(Date.now())


  const reloadCarContext = () => {
    const currentTimestamp = Date.now()
    settimestamp(currentTimestamp)
  }

  return (
    <Context.Provider value={{
      user,
      reloadCarContext
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
