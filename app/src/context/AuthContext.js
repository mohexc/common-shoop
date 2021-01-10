import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import _ from 'lodash'

const Context = React.createContext()
const AuthContext = ({ children }) => {

  const [user, setuser] = useState(JSON.parse(localStorage.getItem('user')))
  // eslint-disable-next-line
  const [timestamp, settimestamp] = useState(Date.now())

  const login = async (values) => {
    try {
      const { data } = await axios.post(`/api/users/signin`, values)
      localStorage.setItem('user', JSON.stringify(data))
      setuser(data)
      return {
        complete: true,
        data,
        message: 'Sigin Sucess'
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
  const logout = () => {
    setuser()
  }

  const getUsersList = async (keyword = '', pageNumber = '') => {
    try {
      // const products = await authInstance(user).get(`api/products`)
      const { data } = await axios.get(`/api/users?keyword=${keyword}&pageNumber=${pageNumber}`)
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

  const getUser = async (id) => {

  }

  const register = async (values) => {
    try {
      const { data } = await axios.post(`/api/users/signup`, values,)
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
      login,
      logout,
      getUsersList,
      getUser,
      register,
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
