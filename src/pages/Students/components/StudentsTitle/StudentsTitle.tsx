import React, {FC} from 'react'
import { PATH_NEW_STUDENT } from '@consts/routes'

import Button from '@components/ui/Button'
import { ReactComponent as PlusIcon } from '@assets/icons/plus.svg'

import * as SC from './styled'


const StudentsTitle: FC = () => {
    return <SC.StudentsTitleContainer>
        <SC.StudentsTitle>Студенты</SC.StudentsTitle>
        <SC.ButtonWrapper to={PATH_NEW_STUDENT}>
            <Button 
            text="Добавить студента" 
            onClick={e => e}
            icon={PlusIcon}></Button>
        </SC.ButtonWrapper> 
    </SC.StudentsTitleContainer>
}

export default StudentsTitle
