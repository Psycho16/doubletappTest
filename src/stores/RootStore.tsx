import StudentsStore from './Students/StudentsStore'


export default class RootStore {
  studentsStore: StudentsStore

  constructor() {
    this.studentsStore = new StudentsStore(this)
  }
}

// root store init
// holds a reference to the store (singleton)
export const rootStore = new RootStore()
