import { runInAction,makeAutoObservable } from 'mobx'
// import { getStudents } from 'api/students'
import { addStudent, getStudents, deleteStudent } from 'api/students'

import { StudentProps } from '@models/students/EntityModels/student'
import { sortBy } from '@utils/manipulateStudents'
import RootStore from '@stores/RootStore'
import ApiRequestStore from '@stores/common/ApiRequestStore'




export const filterStudents = (students: StudentProps[], input: string) => {
  return students.slice().filter(student => student.name.toLowerCase().includes(input.toLowerCase()))
}

export const sortStudents = (students: StudentProps[], sortType: string) => {
  return students.slice().sort((a, b) => sortBy(a, b, sortType))
}

export const deleteStudentFromPage = (students: StudentProps[], id: number) => {
  return students.slice().filter(student => student.id !== id)
}

export default class StudentsStore {
  private _rootStore: RootStore
  input = '';
  sortType = 'Имя А-Я';
  students: StudentProps[]  = []

  getStudentsRequest = new ApiRequestStore({
    apiFunction: getStudents
  })

  addStudentRequest = new ApiRequestStore({
    apiFunction: addStudent
  })

  deleteStudentRequest = new ApiRequestStore({
    apiFunction: deleteStudent
  })

  constructor(rootStore: RootStore) {
    this._rootStore = rootStore
    makeAutoObservable(this)
  }

  fetchStudents() {
    // eslint-disable-next-line no-debugger
    // debugger
    this.getStudentsRequest.send(undefined)
    .then((studentsData) => {
      // this.students = studentsData?.students || []
      runInAction(() => {
        this.students = studentsData?.students || []
      })
    })
  }

  get filteredAndSortedStudents() {
    // const students = this.getStudentsRequest.data?.students || []
    const sortedStudents = sortStudents(this.students, this.sortType)
    return filterStudents(sortedStudents, this.input) 
  }

  deleteStudentFromPage( id: number) {
    runInAction(() => {
      this.students = deleteStudentFromPage(this.students, id)
    })
    // this.students = deleteStudentFromPage(this.students, id)
  }

  setSortType(label: string) {
    runInAction(() => {
      this.sortType = label
    })
    
  }
  setInput(input: string) {
    runInAction(() => {
      this.input = input
    })
    
  }
}
