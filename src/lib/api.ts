import axios from 'axios'

const api = axios.create({
  // baseURL: 'https://backend-m-i.vercel.app/api/v1',

  // baseURL: 'https://accounts.mayycrm.com/api',

  // baseURL: 'http://127.0.0.1:8000/api',

  baseURL: 'https://api.inflauditor.ma',

  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const setAuthToken = (token: string | null) => {
  if (token) {
    // api.defaults.headers['Authorization'] = `Bearer ${token}`
  } else {
    delete api.defaults.headers['Authorization']
  }
}

export default api
