import { makeAutoObservable } from 'mobx'
// import { getStudents } from 'api/students'
import {studentProps} from '@pages/Students/components/Student/Student'

import { sortBy } from '@utils/manipulateStudents'
import RootStore from '@stores/RootStore'


export const deleteStudent = (students: studentProps[], id: number) => {
  return students.map(a => a).filter(student => student.id !== id)
}

export const filterStudents = (students: studentProps[], input: string) => {
  return students.filter(student => student.name.toLowerCase().includes(input.toLowerCase()))
}

export const sortStudents = (students: studentProps[], sortType: string) => {
  return students.sort((a, b) => sortBy(a, b, sortType))
}

export default class StudentsStore {
  private _rootStore: RootStore
  students: studentProps[] = [];
  studentsForView: studentProps[] = [];
  input = '';
  sortType = 'Имя А-Я';

  constructor(
    rootStore: RootStore
    ) {
    this._rootStore = rootStore
    makeAutoObservable(this)
  }
  deleteStudent(id: number) {
    this.students = deleteStudent(this.students, id)
    this.studentsForView = filterStudents(this.students, this.input)
    this.studentsForView = sortStudents(this.studentsForView, this.sortType)
  }
  getStudents(students: studentProps[]) {
    this.students = students
    this.studentsForView = students
  }
  setSortType(label: string) {
    this.studentsForView = sortStudents(this.studentsForView, label)
    this.sortType = label
  }
  setInput(input: string) {
    this.studentsForView = filterStudents(this.students, input)
    this.studentsForView = sortStudents(this.studentsForView, this.sortType)
    this.input = input
  }
}
