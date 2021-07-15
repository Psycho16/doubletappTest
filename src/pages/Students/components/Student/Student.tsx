import React, { FC } from 'react'
import { rusGroups, layoutColors, rusSpecialties, specialties } from '@consts/studentArrays'

import { getRusGroup, getRusSpecialty, getAgeFromBirthday, fixAgeWord } from '@utils/getStudentInfo'
import { ReactComponent as DeleteIcon } from '@assets/icons/delete.svg'
import StudentsStore from '@stores/Students/StudentsStore'

import * as SC from './styled'


export interface studentProps {
  id: number
  avatar: string
  name: string
  specialty: string
  group: string
  color: string
  rating: number
  birthday: string
}

const Student: FC<studentProps> = (props) => {
  const { id, avatar, name, specialty, group, color, rating, birthday } = props

  const rusSpecialty: string = getRusSpecialty(specialty, rusSpecialties, specialties)
  const rusGroup: string = getRusGroup(group, rusGroups, specialties)
  const age: number = getAgeFromBirthday(birthday)
  const layoutColor: string = layoutColors[color]
  const ageWord: string = fixAgeWord(age)

  return (
    <SC.StudentWrapper>
      <SC.StudentAvatar alt="student" src={avatar} />
      <SC.StudentName>{name}</SC.StudentName>
      <SC.SeparatingLine />
      <SC.StudentSpecialty>
        {/* <SC.ListPoint src={listPoint} /> */}
        {rusSpecialty}
      </SC.StudentSpecialty>
      <SC.StudentGroup>
        {/* <SC.ListPoint src={listPoint} /> */}
        {rusGroup}
      </SC.StudentGroup>
      <SC.StudentAge>
        {/* <ListPoint src={listPoint} /> */}
        {age}
        <SC.AgeWord>{ageWord}</SC.AgeWord>
      </SC.StudentAge>
      <SC.StudentRatingAndColor>
        <SC.StudentRating>
          <SC.RatingStar
          //   src={ratingStar}
          />
          {rating}
        </SC.StudentRating>
        <SC.StudentColor style={{ background: layoutColor }} />
      </SC.StudentRatingAndColor>

      <SC.DeleteButton
        onClick={() => StudentsStore.deleteStudent(id)}
      >
        <SC.DeleteWrapper>
          <DeleteIcon/>
        </SC.DeleteWrapper>
        
      </SC.DeleteButton>
      
    </SC.StudentWrapper>
  )
}

export default Student
