import React, { FC } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { PATH_STUDENTS } from '@consts/routes'
import { layoutColors, namesOfColors, rusGroups, rusSpecialties, specialties } from '@consts/studentArrays'

import MainLayout from '@components/shared/MainLayout'
import { useRootStore } from '@hooks/common/useStore'
import { Container } from '@components/styled/Container'
import {ReactComponent as ArrowIcon} from '@assets/icons/arrow-left.svg'
import { getDateDescription, getRusGroup, getRusSpecialty, getStudentInitials } from '@utils/getStudentInfo'

import * as SC from './styled'


const StudentPage: FC = () => {
  const { studentsStore: { 
    students} } = useRootStore()
    const { id } = useParams<{id: string}>()
    if (!students.filter(student => student.id.toString() === id)[0]) return <Redirect to="/" />
  const { 
        name,
        group,
        birthday,
        rating,
        color,
        specialty,
        avatar
    } = students.filter(student => student.id.toString() === id)[0]
    
    const rusSpecialty = getRusSpecialty(specialty, rusSpecialties, specialties)
    const rusGroup = getRusGroup(group, rusGroups, specialties)
    const dateOfBirthday = getDateDescription(birthday)
    const layoutColor = layoutColors[color]
  return (
    <MainLayout>
      <Container>
      <SC.BackToPage to={PATH_STUDENTS} >
        <SC.ArrowIconWrapper>
          <ArrowIcon/>
        </SC.ArrowIconWrapper>
        назад к списку студентов
      </SC.BackToPage>
      <SC.PageTitle>{name}</SC.PageTitle>
      <SC.StudentWrapper>
      {
        avatar ?
        <SC.StudentAvatar src={avatar} alt="avatar"/>
        : <SC.LabelCircle>
        <SC.LabelCircleText>{getStudentInitials(name)}</SC.LabelCircleText>
      </SC.LabelCircle>  
      }
        <SC.StudentInfo>
          <SC.StudentName>{name}</SC.StudentName>
          <SC.StudentSubInfo>Дата Рождения: {dateOfBirthday}</SC.StudentSubInfo>
          <SC.StudentSubInfo>Специальность: {rusSpecialty}</SC.StudentSubInfo>
          <SC.StudentSubInfo>Группа: {rusGroup}</SC.StudentSubInfo>
          <SC.StudentSubInfo>Рейтинг: {rating}</SC.StudentSubInfo>
          <SC.FavouriteColor>Любимый цвет: {namesOfColors[color]} 
          <SC.ColorBox style={{background: layoutColor }}></SC.ColorBox>
          </SC.FavouriteColor>
        </SC.StudentInfo>
        
      </SC.StudentWrapper>
      </Container>
    </MainLayout>
    
    
    )
}

export default StudentPage
