import React, {FC} from 'react'

import InputComponent from '@components/ui/Input'

import * as SC from './styled'


const StudentsFields: FC = () => {
    return (<SC.SearchAndSortContainer>
        <InputComponent onChange={(event): string => (event.target.value.trim())} 
        name="search" value="">
            
        </InputComponent>
    </SC.SearchAndSortContainer>)
}

export default StudentsFields
