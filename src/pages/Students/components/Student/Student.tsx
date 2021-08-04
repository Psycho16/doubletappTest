import React, { FC } from 'react'
import { rusGroups, layoutColors, rusSpecialties, specialties } from '@consts/studentArrays'
import { PATH_STUDENTS } from '@consts/routes'

import { getRusGroup, getRusSpecialty, getAgeFromBirthday, fixAgeWord, getStudentInitials } from '@utils/getStudentInfo'
import { ReactComponent as DeleteIcon } from '@assets/icons/delete.svg'
import { ReactComponent as StarIcon } from '@assets/icons/star.svg'
import { StudentProps } from '@models/students/EntityModels/student'

import DeleteButton from '../DeleteButton'

import * as SC from './styled'


type DeleteButtonProps = {
  onDelete: (id: number) => void
  isLoadingDelete: boolean
}

const Student: FC<StudentProps & DeleteButtonProps> = (props) => {
  const { id, avatar, name, specialty, group, color, rating, birthday, onDelete, isLoadingDelete } = props

  const rusSpecialty: string = getRusSpecialty(specialty, rusSpecialties, specialties)
  const rusGroup: string = getRusGroup(group, rusGroups, specialties)
  const age: number = getAgeFromBirthday(birthday)
  const layoutColor: string = layoutColors[color]
  const ageWord: string = fixAgeWord(age)
  
  return (
    <SC.StudentWrapper>
      {
         avatar ? 
         (<SC.AvatarWrapper>
          <SC.StudentAvatar alt="student" src={avatar} />
         <SC.StudentAvatarBorder/>
         </SC.AvatarWrapper>
         )
         : 
         <SC.EmptyStudentAvatar>
           <SC.EmptyStudentAvatarText>{getStudentInitials(name)}</SC.EmptyStudentAvatarText>
         </SC.EmptyStudentAvatar>
      }
      <SC.StudentName to={`${PATH_STUDENTS}/${id}`} >{name}</SC.StudentName>
      <SC.SeparatingLine />
      <SC.StudentSpecialty title={rusSpecialty}>
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

      <DeleteButton 
      icon={DeleteIcon}
      onClick={() => onDelete(id)}
      disabled={isLoadingDelete}
      />
      
    </SC.StudentWrapper>
  )
}

export default Student
