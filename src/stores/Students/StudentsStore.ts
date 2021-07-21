import { makeAutoObservable } from 'mobx'
// import { getStudents } from 'api/students'
import { addStudent, getStudents, deleteStudent } from 'api/students'

import { studentProps } from '@models/students/EntityModels/student'
import { sortBy } from '@utils/manipulateStudents'
import RootStore from '@stores/RootStore'
import ApiRequestStore from '@stores/common/ApiRequestStore'




export const filterStudents = (students: studentProps[], input: string) => {
  return students.slice().filter(student => student.name.toLowerCase().includes(input.toLowerCase()))
}

export const sortStudents = (students: studentProps[], sortType: string) => {
  return students.slice().sort((a, b) => sortBy(a, b, sortType))
}

export default class StudentsStore {
  private _rootStore: RootStore
  input = '';
  sortType = 'Имя А-Я';

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

  get students() {
    const studentsTemp = this.getStudentsRequest.data?.students || []
    const sortedStudents = sortStudents(studentsTemp, this.sortType)
    return filterStudents(sortedStudents, this.input) 
  }

  setSortType(label: string) {
    this.sortType = label
  }
  setInput(input: string) {
    this.input = input
  }
}
