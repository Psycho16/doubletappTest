import React from 'react'
import { PATH_ROOT } from '@consts/routes'

import { Container } from '@components/styled/Container'
import MainLayout from '@components/shared/MainLayout'
import {ReactComponent as ArrowIcon} from '@assets/icons/arrow-left.svg'

import AddStudentForm from './components/AddStudentForm'
import * as SC from './styled'



const NewStudentPage = () => {
  
  return (
    <MainLayout>
      <Container>
        <SC.BackToPage to={PATH_ROOT} >
          <SC.ArrowIconWrapper>
            <ArrowIcon/>
          </SC.ArrowIconWrapper>
          назад к списку студентов
        </SC.BackToPage>
        <SC.PageTitle>Новый студент</SC.PageTitle>
        <AddStudentForm/>
        </Container>
    </MainLayout>
  )
}

export default NewStudentPage
