import React from 'react'
import { PATH_STUDENTS } from '@consts/routes'

import browserHistory from '@utils/browserHistory'
import { Container } from '@components/styled/Container'
import MainLayout from '@components/shared/MainLayout'
import {ReactComponent as ArrowIcon} from '@assets/icons/arrow-left.svg'
import Button from '@components/ui/Button'

import * as SC from './styled'
import InputWithText from './components/InputWithText'
import PopupWithText from './components/PopupWithText'


const NewStudentPage = () => {
  
  return (
    <MainLayout>
      <Container>
        <SC.BackToPage to={PATH_STUDENTS} >
          <SC.ArrowIconWrapper>
              <ArrowIcon/>
            </SC.ArrowIconWrapper>
          
          назад к списку студентов</SC.BackToPage>
      <SC.PageTitle>Новый студент</SC.PageTitle>
      <input name="myFile" type="file"></input>
      <SC.InputsWrapper>
        <InputWithText type="text" property="ФИО" placeholder="Иванов Иван Иванович" />
        <InputWithText type="email" property="Email" placeholder="ivanov@gmail.com" />
        <PopupWithText  
          property="Специальность"
          placeholder="Выбрать"
          items={[
            'Математика',
            'Фундаментальная информатика и информационные технологии',
            'Компьютерная безопасность',
            'Прикладная математика',
            'Математика и компьютерные науки',
            'Механика и математическое моделирование',
            'Математическое обеспечение и администрирование информационных систем'
          ]}/>
           <PopupWithText  
          property="Группа"
          placeholder="Выбрать"
          items={['101', '102', '201', '202', '301', '401', '501']}
          />
        <InputWithText type="number" property="Рейтинг" placeholder="0" />
        <PopupWithText  
          property="Пол"
          placeholder="Выбрать"
          items={['Мужской', 'Женский']}
          />
          <PopupWithText  
          property="Любимый цвет"
          placeholder="Выбрать"
          items={[
           '#49C2E8',
           '#E25B5B', 
           '#83C872', 
           '#F7FB53', 
           '#000000', 
           '#EFA638',
           `linear-gradient(180deg, rgba(255,0,0,1) 
           0%, rgba(255,157,0,1) 
           17%, rgba(255,252,0,1) 
           41%, rgba(0,255,33,1) 
           59%, rgba(20,0,245,1) 
           76%, rgba(209,0,255,1) 100%)`]}
          type="colors"
          />
      </SC.InputsWrapper>
      <SC.ButtonWrapper>
        <Button text="Создать" onClick={browserHistory.goBack}></Button>
      </SC.ButtonWrapper>

      </Container>
    </MainLayout>
  )
}

export default NewStudentPage
