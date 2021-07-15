import { getStudentsRequest, getStudentsResponse } from '@models/students/getStudents'
import { addStudentRequest, addStudentResponse } from '@models/students/addStudent'
import { deleteStudentRequest, deleteStudentResponse } from '@models/students/deleteStudent'
import { http } from '@services/httpClient'


export const getStudents = (data: getStudentsRequest) => http.get<getStudentsResponse>('/students/getStudents', data)

export const addStudent = (data: addStudentRequest) => http.post<addStudentResponse>('/students/addStudent', data)
// export const deleteStudent = (data: deleteStudentRequest) => 
// http.delete<deleteStudentResponse>('/students/deleteStudent', data)