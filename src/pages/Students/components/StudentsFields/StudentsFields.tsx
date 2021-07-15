import React, {FC} from 'react'

import * as SC from './styled'


const StudentsFields: FC = () => {
    return (<SC.StudentsFieldsContainer>
        <SC.StudentName>ФИО</SC.StudentName>
        <SC.StudentSpecialty>Специальность</SC.StudentSpecialty>
        <SC.StudentGroup>Группа</SC.StudentGroup>
        <SC.StudentAge>Возраст</SC.StudentAge>
        <SC.StudentRating>Рейтинг</SC.StudentRating>
    </SC.StudentsFieldsContainer>)
}

export default StudentsFields
