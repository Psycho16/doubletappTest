import React from 'react'
import { observer } from 'mobx-react-lite'

import { Container } from '@components/styled/Container'
import MainLayout from '@components/shared/MainLayout'
import { useRootStore } from '@hooks/common/useStore'
import { studentProps } from '@models/students/EntityModels/student'

import StudentsTitle from './components/StudentsTitle'
import StudentsFields from './components/StudentsFields'
import SearchAndSort from './components/SearchAndSort'
import Student from './components/Student'
import * as SC from './styled'


const StudentsPage = () => {
  const { studentsStore: { studentsRequest, students } } = useRootStore()
  React.useEffect(() => {

    studentsRequest.send(undefined)

  }, [studentsRequest])

  return (
    <MainLayout>
      <Container>
        <StudentsTitle />
        <SearchAndSort />
        <StudentsFields />
        <SC.StudentWrapper>
          {
            students &&
            students.length !== 0 ? students
            .map((student: studentProps) => <Student key={student.id} {...student} />) 
            : <p>Нет студентов</p>
          }
        </SC.StudentWrapper>
        
      </Container>
    </MainLayout>
  )
}

export default observer(StudentsPage)
