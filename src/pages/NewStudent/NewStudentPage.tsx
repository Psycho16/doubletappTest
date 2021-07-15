import React from 'react'
import { Link } from 'react-router-dom'
import { PATH_STUDENTS } from '@consts/routes'

import { Container } from '@components/styled/Container'
import MainLayout from '@components/shared/MainLayout'
import {ReactComponent as ArrowIcon} from '@assets/icons/arrow-left.svg'

import * as SC from './styled'
import InputWithText from './components/InputWithText'


const NewStudentPage = () => {
  
  return (
    <MainLayout>
      <Container>
      <Link to={PATH_STUDENTS} className="router-link" style={{textDecoration: "none", width: "2px"}}>
        <SC.BackToPage>
          <ArrowIcon style={{position: "absolute", left: "0"}}/>
          назад к списку студентов</SC.BackToPage>
      </Link>
      <SC.PageTitle>Новый студент</SC.PageTitle>
      <SC.InputsWrapper>
        <InputWithText type="text" property="ФИО" placeholder="Иванов Иван Иванович" />
        <InputWithText type="email" property="Email" placeholder="ivanov@gmail.com" />
        <InputWithText type="number" property="Рейтинг" placeholder="0" />
      </SC.InputsWrapper>
      

      </Container>
    </MainLayout>
  )
}

export default NewStudentPage
