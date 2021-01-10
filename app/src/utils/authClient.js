import Axios from 'axios'
// eslint-disable-next-line
const tokenKey = 'token'

const authInstance = (user) => Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    // Authorization: localStorage.getItem(tokenKey) || sessionStorage.getItem(tokenKey) ,
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${user.token}`,
  }
})


export default authInstance