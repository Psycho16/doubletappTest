import { GetStudentsResponse } from '@models/students/ApiModels/getStudents'
import { AddStudentResponse } from '@models/students/ApiModels/addStudent'
import { DeleteStudentResponse } from '@models/students/ApiModels/deleteStudent'
import { http } from '@services/httpClient'


export const getStudents = () => http.get<GetStudentsResponse>('/students')

export const addStudent = (data: FormData) => http.post<AddStudentResponse>('/students', data)
export const deleteStudent = (id: number) => http.delete<DeleteStudentResponse>(`/students/${id}`)