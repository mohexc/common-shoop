import React, { useState, useContext, useEffect } from 'react'
import Axios from 'axios'
import _ from 'lodash'

const Context = React.createContext()
const AuthContext = ({ children }) => {

  const [user, setuser] = useState()
  const [userList, setUserList] = useState()
  const [timestamp, settimestamp] = useState(Date.now())

  const login = async () => {

  }

  const getUsersList = async (keyword, pageNumber) => {

  }

  const getUser = async (id) => {

  }

  const createUser = async (values) => {

  }

  const updateUser = async (id, values) => {

  }

  const deleteUser = async (id) => {

  }

  const reloadAuthContext = () => {
    const currentTimestamp = Date.now()
    settimestamp(currentTimestamp)
  }

  return (
    <Context.Provider value={{
      user,
      userList,
      getUsersList,
      getUser,
      createUser,
      updateUser,
      deleteUser,
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
