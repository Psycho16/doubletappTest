import { StudentProps } from '@models/students/EntityModels/student'

import { getAgeFromBirthday } from './getStudentInfo'


export function sortBy(a: StudentProps, b: StudentProps, type: string): number {
  switch (type) {
    case 'Имя А-Я':
      return a.name.localeCompare(b.name)
    case 'Имя Я-А':
      return b.name.localeCompare(a.name)
    case 'Сначала моложе':
      return getAgeFromBirthday(a.birthday) - getAgeFromBirthday(b.birthday)
    case 'Сначала старше':
      return getAgeFromBirthday(b.birthday) - getAgeFromBirthday(a.birthday)
    case 'Низкий рейтинг':
      return a.rating - b.rating
    case 'Высокий рейтинг':
      return b.rating - a.rating
    default:
      return 0
  }
}