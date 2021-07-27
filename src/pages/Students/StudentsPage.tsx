import React from 'react'
import { observer } from 'mobx-react-lite'

import { Container } from '@components/styled/Container'
import MainLayout from '@components/shared/MainLayout'
import { useRootStore } from '@hooks/common/useStore'

import UseDeleteStudentLogic from './UseDeleteLogic'
import StudentsTitle from './components/StudentsTitle'
import StudentsFields from './components/StudentsFields'
import SearchAndSort from './components/SearchAndSort'
import Student from './components/Student'
import * as SC from './styled'


const StudentsPage = () => {
  // const students = []
  const { studentsStore: { 
     students, filteredAndSortedStudents }, studentsStore } = useRootStore()
  React.useEffect(() => {
    studentsStore.fetchStudents()
  }, [studentsStore])

  const {
    isLoading,
    deleteStudent
  } = UseDeleteStudentLogic()
  const onDelete = (id: number) => {
    deleteStudent(id)
    .then((data) =>{
      if(data?.success) {
        studentsStore.deleteStudentFromPage(id)
      }
    })
      
      
    // .then(() => console.log(deleteStudentRequest.isLoading))
    // .then(() => setIsLoading(false))
    // setIsLoading(true)
    // console.log(deleteStudentRequest.isLoading)
  } 

  return (
    <MainLayout>
      <Container>
        <StudentsTitle />
        <SearchAndSort />
        <StudentsFields />
        {
          students &&
          students.length !== 0 ? 
        <SC.StudentsWrapper>
          {
            filteredAndSortedStudents.map(student => <Student key={student.id} {...student} 
              onDelete={onDelete} isLoadingDelete={isLoading} />) 
          }
        </SC.StudentsWrapper>
        :
        <div>Нет студентов</div>
        }
        
      </Container>
    </MainLayout>
  )
}

export default observer(StudentsPage)
