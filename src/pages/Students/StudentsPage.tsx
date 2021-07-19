import React from 'react'
import axios from 'axios'
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
import useStudentsLogic from './useStudentsLogic'


const StudentsPage = () => {
  // const [students, setStudents] = React.useState([])
  const {StudentsStore} = useRootStore()
  const {
    onSubmit
  } = useStudentsLogic()
  React.useEffect(() => {
    // axios.get('https://front-assignment-api.2tapp.cc/api/persons').then(({ data }) => {
    //   // setStudents(data.students)
    //   StudentsStore.getStudents(data.students)
    // })
    onSubmit
  }, [])

  return (
    <MainLayout>
      <Container>
        <button onClick={onSubmit}></button>
        <StudentsTitle />
        <SearchAndSort />
        <StudentsFields />
        <SC.StudentWrapper>
          {StudentsStore.studentsForView 
          && StudentsStore.studentsForView.map((student: studentProps) => <Student key={student.id} {...student} />)}
        </SC.StudentWrapper>
        
      </Container>
    </MainLayout>
  )
}

export default observer(StudentsPage)
