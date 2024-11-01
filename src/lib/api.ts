import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backend-m-i.vercel.app/api/v1',

  // baseURL: 'http://localhost:4000/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})
export default api
