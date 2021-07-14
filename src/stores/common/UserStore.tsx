import { makeAutoObservable } from 'mobx'

import { UserRole } from '@models/common/user.model'
import RootStore from '@stores/RootStore'
import * as storage from '@utils/localStorage'


export default class UserStore {
  private _rootStore: RootStore
  role: UserRole = UserRole.VISITOR

  constructor(rootStore: RootStore) {
    this._rootStore = rootStore

    if (storage.getAuthToken() !== null) {
      const userRole = storage.getUserRole()
      if (userRole !== null) this.role = userRole as UserRole
    }

    makeAutoObservable(this)
  }

  setUserRole(role: UserRole): void {
    storage.setUserRole(role)
    this.role = role
  }

  logout(): void {
    storage.removeAuthToken()
    storage.removeUserRole()
    this.role = UserRole.VISITOR
  }
}