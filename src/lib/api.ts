import axios from 'axios'

const api = axios.create({
  // baseURL: 'https://backend-m-i.vercel.app/api/v1',

  // baseURL: 'https://accounts.mayycrm.com/api',

  // baseURL: 'http://127.0.0.1:8000/api',

  baseURL: 'https://api.inflauditor.ma',

  withCredentials: true,
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

// api.interceptors.response.use(
//   response => {
//     console.log('API call successful:', response.data)

//     return response
//   },
//   error => {
//     console.log(JSON.stringify(error))
//     console.log('Unauthorized')

//     if (error.response?.status === 401) {
//       setAuthToken(null)

//       console.log('Unauthorized')

//       return Promise.reject(new Error('Unauthorized - Please login again.'))
//     }

//     // Pass through other errors
//     return Promise.reject(error)
//   }
// )

export default api
