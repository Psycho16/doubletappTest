import React, {FC} from 'react'

import Button from '@components/ui/Button'
import browserHistory from '@utils/browserHistory'

import * as SC from './styled'


const StudentsTitle: FC = () => {
    return <SC.StudentsTitleContainer>
        <SC.StudentsTitle>Студенты</SC.StudentsTitle>
        <SC.ButtonWrapper>
            <Button text="Добавить студента" onClick={browserHistory.goBack}></Button>
        </SC.ButtonWrapper> 
    </SC.StudentsTitleContainer>
}

export default StudentsTitle
