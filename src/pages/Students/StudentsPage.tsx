import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useDeleteStudentLogic } from '@pages/Students/useDeleteLogic'

import { Container } from '@components/styled/Container'
import MainLayout from '@components/shared/MainLayout'
import { useRootStore } from '@hooks/common/useStore'

import StudentsTitle from './components/StudentsTitle'
import StudentsFields from './components/StudentsFields'
import SearchAndSort from './components/SearchAndSort'
import Student from './components/Student'
import * as SC from './styled'


const StudentsPage = () => {
  const { studentsStore: { 
     students, filteredAndSortedStudents }, studentsStore } = useRootStore()

  useEffect(() => {
    studentsStore.fetchStudents()
  }, [studentsStore])

  const {
    isLoading,
    deleteStudent
  } = useDeleteStudentLogic()

  const onDelete = (id: number) => {
    deleteStudent(id)
    .then((data) =>{
      if(data?.success) {
        studentsStore.deleteStudentFromPage(id)
      }
    })
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
            filteredAndSortedStudents.map(student => <Student 
                key={student.id} 
                onDelete={onDelete} 
                isLoadingDelete={isLoading} 
                {...student} 
              />) 
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
