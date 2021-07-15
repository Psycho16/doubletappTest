import React, {FC} from 'react'

import Button from '@components/ui/Button'
import browserHistory from '@utils/browserHistory'
import { ReactComponent as PlusIcon } from '@assets/icons/plus.svg'

import * as SC from './styled'


const StudentsTitle: FC = () => {
    return <SC.StudentsTitleContainer>
        <SC.StudentsTitle>Студенты</SC.StudentsTitle>
        <SC.ButtonWrapper>
                <PlusIcon 
                style={{position: "absolute",top: "calc(50% - 8px)",left: "9%"}}
                />
            <Button text="Добавить студента" onClick={browserHistory.goBack}></Button>
        </SC.ButtonWrapper> 
    </SC.StudentsTitleContainer>
}

export default StudentsTitle
