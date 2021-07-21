import { getStudentsResponse } from '@models/students/ApiModels/getStudents'
import { addStudentResponse } from '@models/students/ApiModels/addStudent'
import { deleteStudentResponse } from '@models/students/ApiModels/deleteStudent'
import { http } from '@services/httpClient'


export const getStudents = () => http.get<getStudentsResponse>('/students')

export const addStudent = (data: FormData) => http.post<addStudentResponse>('/students', data)
export const deleteStudent = (id: number) => http.delete<deleteStudentResponse>(`/students/${id}`)