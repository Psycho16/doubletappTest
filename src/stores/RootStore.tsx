import AuthStore from './Auth/AuthStore'
import UserStore from './common/UserStore'
import StudentsStore from './Students/StudentsStore'


export default class RootStore {
  userStore: UserStore
  authStore: AuthStore
  StudentsStore: StudentsStore

  constructor() {
    this.userStore = new UserStore(this)
    this.authStore = new AuthStore(this)
    this.StudentsStore = new StudentsStore(this)
  }
}

// root store init
// holds a reference to the store (singleton)
export const rootStore = new RootStore()
