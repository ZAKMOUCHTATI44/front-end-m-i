// ** JWT import
import jwt from 'jsonwebtoken'

// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Default AuthConfig

// ** Types
import { UserDataType } from 'src/context/types'
import api from 'src/lib/api'

const users: UserDataType[] = [
  {
    id: 1,
    role: 'admin',
    password: 'admin',
    fullName: 'John Doe',
    username: 'johndoe',
    email: 'admin@vuexy.com'
  },
  {
    id: 3,
    role: 'admin',
    password: 'salah123',
    fullName: 'Salah mimouni',
    avatar:
      'https://media.licdn.com/dms/image/v2/D4E03AQGZ3xBdC33myQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1672358701233?e=2147483647&v=beta&t=XqlGl8B3yeIDvKI-HUOVHoB9HCZ8SS_7LXf9v13SsHQ',
    username: 'salahmimouni',
    email: 'salah@maroc-influence.com'
  },
  {
    id: 4,
    role: 'admin',
    password: 'amal123',
    fullName: 'Amal amazouz',
    username: 'amalamazouz',
    avatar:
      'https://media.licdn.com/dms/image/v2/D4E03AQG6pmxWV1gifw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1672064701245?e=2147483647&v=beta&t=7QPzC4jolWUHbodB9dyIHCC7WoqnGqwcW4zt3vshFd4',
    email: 'amal@maroc-influence.com'
  },
  {
    id: 2,
    role: 'client',
    password: 'client',
    fullName: 'Jane Doe',
    username: 'janedoe',
    email: 'client@vuexy.com'
  }
]

// ! These two secrets should be in .env file and not in any other file
const jwtConfig = {
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
  expirationTime: process.env.NEXT_PUBLIC_JWT_EXPIRATION,
  refreshTokenSecret: process.env.NEXT_PUBLIC_JWT_REFRESH_TOKEN_SECRET
}

type ResponseType = [number, { [key: string]: any }]

mock.onPost('/jwt/login').reply(async request => {
  const { email, password } = JSON.parse(request.data)

  console.log(email, password)

  // try {
  //   const response = {
  //     accessToken: 'gdiqgdiqipdqid',
  //     userData: { name: 'ZAK', email: 'z.mouchtati@gmail.com', role: 'admin' }
  //   }

  //   return [200, { response }]
  // } catch (err) {
  //   const error = {
  //     email: ['email or Password is Invalid']
  //   }

  //   return [400, { error }]
  // }

  try {
    const res = await api.post('/login', { username: email, password })

    const response = {
      // accessToken: res.data.data.token,
      userData: { name: res.data.name, email: email, role: 'admin' }
    }

    return [200, { response }]
  } catch (err) {
    const error = {
      email: ['email or Password is Invalid']
    }

    return [400, { error }]
  }
})

mock.onPost('/jwt/register').reply(request => {
  if (request.data.length > 0) {
    const { email, password, username } = JSON.parse(request.data)
    const isEmailAlreadyInUse = users.find(user => user.email === email)
    const isUsernameAlreadyInUse = users.find(user => user.username === username)
    const error = {
      email: isEmailAlreadyInUse ? 'This email is already in use.' : null,
      username: isUsernameAlreadyInUse ? 'This username is already in use.' : null
    }

    if (!error.username && !error.email) {
      const { length } = users
      let lastIndex = 0
      if (length) {
        lastIndex = users[length - 1].id
      }
      const userData = {
        id: lastIndex + 1,
        email,
        password,
        username,
        avatar: null,
        fullName: '',
        role: 'admin'
      }

      users.push(userData)

      const accessToken = jwt.sign({ id: userData.id }, jwtConfig.secret as string)

      const user = { ...userData }
      delete user.password

      const response = { accessToken }

      return [200, response]
    }

    return [200, { error }]
  } else {
    return [401, { error: 'Invalid Data' }]
  }
})

mock.onGet('/auth/me').reply(config => {
  // ** Get token from header
  // @ts-ignore
  console.log(config)

  console.log('Called')

  // ** Default response
  let response: ResponseType = [200, {}]

  const obj = {
    userData: {
      id: 1,
      role: 'admin',
      password: 'admin',
      fullName: 'SALAH Doe',
      username: 'johndoe',
      email: 'admin@vuexy.com'
    },
    password: undefined
  }

  // ** return 200 with user data
  response = [200, obj]

  return response
})
