import React, { FC } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { PATH_STUDENTS } from '@consts/routes'
import {  namesOfColors, rusGroups, rusSpecialties, specialties } from '@consts/studentArrays'

import MainLayout from '@components/shared/MainLayout'
import { useRootStore } from '@hooks/common/useStore'
import { Container } from '@components/styled/Container'
import {ReactComponent as ArrowIcon} from '@assets/icons/arrow-left.svg'
import { getDateDescription, getRusGroup, getRusSpecialty} from '@utils/getStudentInfo'
import StudentForm from '@components/widgets/StudentForm'

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
        avatar,
        sex
    } = students.filter(student => student.id.toString() === id)[0]
    
    const rusSpecialty = getRusSpecialty(specialty, rusSpecialties, specialties)
    const rusGroup = getRusGroup(group, rusGroups, specialties)
    const dateOfBirthday = getDateDescription(birthday)
    const rusSex = (sex === "f" ? "Женский" : "Мужской")
    
  return (
    <MainLayout>
      <Container>
      <SC.BackToPage to={PATH_STUDENTS} >
        <SC.ArrowIconWrapper>
          <ArrowIcon/>
        </SC.ArrowIconWrapper>
        назад к списку студентов
      </SC.BackToPage>
      <SC.PageTitle>Профиль студента</SC.PageTitle>
        <StudentForm 
          avatar={avatar}
          isStatic={true} 
          name={name}
          rusGroup={rusGroup}
          dateOfBirthday={dateOfBirthday}
          rating={rating}
          color={namesOfColors[color]}
          rusSpecialty={rusSpecialty}
          sex={rusSex}
        />
      </Container>
    </MainLayout>
    
    
    )
}

export default StudentPage
