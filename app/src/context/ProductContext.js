import React, { useState, useContext, useEffect } from 'react'
import Axios from 'axios'
import _ from 'lodash'

const Context = React.createContext()
const AuthContext = ({ children }) => {

  const [token, _settoken] = useState(localStorage.getItem('token'))
  const [user, setuser] = useState()
  const [timestamp, settimestamp] = useState(Date.now())


  const reloadAuthContext = () => {
    const currentTimestamp = Date.now()
    settimestamp(currentTimestamp)
  }

  return (
    <Context.Provider value={{
      user,
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
