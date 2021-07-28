import { GetStudentsResponse, 
          DeleteStudentResponse,
          AddStudentResponse
        } from '@models/students/ApiModels/studentsRequestsModels'
import { http } from '@services/httpClient'


export const getStudentsFromServer = () => http.get<GetStudentsResponse>('/students')

export const addStudent = (data: FormData) => http.post<AddStudentResponse>('/students', data)
export const deleteStudent = (id: number) => http.delete<DeleteStudentResponse>(`/students/${id}`)