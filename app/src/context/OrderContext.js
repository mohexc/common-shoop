import React, { useState, useContext, useEffect } from 'react'
import Axios from 'axios'
import _ from 'lodash'

const Context = React.createContext()
const OrderContext = ({ children }) => {

  const [orders, setOrders] = useState()
  const [timestamp, settimestamp] = useState(Date.now())

  useEffect(() => {

  }, [])


  const reloadOrderContext = () => {
    const currentTimestamp = Date.now()
    settimestamp(currentTimestamp)
  }

  return (
    <Context.Provider value={{
      orders,
      reloadOrderContext
    }}>
      {children}
    </Context.Provider>
  )
}

export const useOrderContext = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('Cannot use useOrderContext outside auth provider')
  }
  return context
}

export default OrderContext
