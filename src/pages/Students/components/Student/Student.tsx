import React, { FC } from 'react'
import { rusGroups, layoutColors, rusSpecialties, specialties } from '@consts/studentArrays'

import { getRusGroup, getRusSpecialty, getAgeFromBirthday, fixAgeWord } from '@utils/getStudentInfo'
import { ReactComponent as DeleteIcon } from '@assets/icons/delete.svg'
import { useRootStore } from "@hooks/common/useStore"
import {ReactComponent as StarIcon} from '@assets/icons/star.svg'
import { studentProps } from '@models/students/EntityModels/student'

import * as SC from './styled'



const Student: FC<studentProps> = (props) => {
  const { id, avatar, name, specialty, group, color, rating, birthday } = props

  const rusSpecialty: string = getRusSpecialty(specialty, rusSpecialties, specialties)
  const rusGroup: string = getRusGroup(group, rusGroups, specialties)
  const age: number = getAgeFromBirthday(birthday)
  const layoutColor: string = layoutColors[color]
  const ageWord: string = fixAgeWord(age)
  const {StudentsStore} = useRootStore()
  return (
    <SC.StudentWrapper>
      <SC.StudentAvatar alt="student" src={avatar} />
      {/* <SC.StudentDivAvatar style={{backgroundImage: `url(${avatar})`}}/> */}
      <SC.StudentName>{name}</SC.StudentName>
      <SC.SeparatingLine />
      <SC.StudentSpecialty>
        <SC.ListPoint />
        {rusSpecialty}
      </SC.StudentSpecialty>
      <SC.StudentGroup>
        <SC.ListPoint  />
        {rusGroup}
      </SC.StudentGroup>
      <SC.StudentAge>
        <SC.ListPoint/>
        {age}
        <SC.AgeWord>{ageWord}</SC.AgeWord>
      </SC.StudentAge>
      <SC.StudentRatingAndColor>
        <SC.StudentRating>
          <SC.RatingStar>
            <StarIcon 
            />
          </SC.RatingStar>
          
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