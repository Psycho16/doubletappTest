import axios from 'axios'
import config from '@consts/appConfig'

import { setAuthToken } from '@utils/localStorage'


// const authToken = getAuthToken()

export const http = axios.create({
  baseURL: config.api.baseUrl,
  headers: {
    secret: config.api.secret,
    Authorization: config.api.token,
    ['X-TOKEN']: config.api.token
  }

})

export const setToken = (token: string): void => {
  setAuthToken(token)
  http.defaults.headers['Authorization'] = `Bearer ${token}`
}