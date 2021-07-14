import { makeAutoObservable } from 'mobx'
import { login, register } from 'api/auth'

import RootStore from '@stores/RootStore'
import ApiRequestStore from '@stores/common/ApiRequestStore'
import { setToken } from '@services/httpClient'
import { RegisterRequest, RegisterResponse } from '@models/auth/register'


export default class AuthStore {
  private _rootStore: RootStore

  loginRequest = new ApiRequestStore({
    apiFunction: login,
    excludedErrorCodes: [400],
    disableGlobalErrors: false,
    shouldUseCustomErrorMessage: true
  })
  registerRequest = new ApiRequestStore<RegisterRequest, RegisterResponse>({
    apiFunction: register
  })

  constructor(rootStore: RootStore) {
    this._rootStore = rootStore
    makeAutoObservable(this)
  }

  get token() {
    const token = this.loginRequest.data?.token
    if (token) setToken(token)
    return token
  }
}
