import React, { FC } from 'react'
import { PATH_STUDENTS } from '@consts/routes'

import { Container } from '@components/styled/Container'
import MainLayout from '@components/shared/MainLayout'
import {ReactComponent as ArrowIcon} from '@assets/icons/arrow-left.svg'
import StudentForm from '@components/widgets/StudentForm'

import * as SC from './styled'



const NewStudentPage: FC = () => {
  
  return (
    <MainLayout>
      <Container>
        <SC.BackToPage to={PATH_STUDENTS} >
          <SC.ArrowIconWrapper>
            <ArrowIcon/>
          </SC.ArrowIconWrapper>
          назад к списку студентов
        </SC.BackToPage>
        <SC.PageTitle>Новый студент</SC.PageTitle>
        <StudentForm isStatic={false}/>
        </Container>
    </MainLayout>
  )
}

export default NewStudentPage
