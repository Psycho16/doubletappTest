import AuthStore from './Auth/AuthStore'
import UserStore from './common/UserStore'


export default class RootStore {
  userStore: UserStore
  authStore: AuthStore

  constructor() {
    this.userStore = new UserStore(this)
    this.authStore = new AuthStore(this)
  }
}

// root store init
// holds a reference to the store (singleton)
export const rootStore = new RootStore()
