import Axios from 'axios'

const tokenKey = 'token'

const authInstance = Axios.create({
  baseURL: window._env.REACT_APP_API_URL,
  headers: {
    // Authorization: localStorage.getItem(tokenKey) || sessionStorage.getItem(tokenKey) ,
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userInfo.token}`,
  }
})


export default authInstance