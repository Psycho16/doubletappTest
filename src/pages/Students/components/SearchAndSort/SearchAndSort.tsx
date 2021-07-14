import React, {FC} from 'react'

import InputComponent from '@components/ui/Input'
import PopupComponent from '@components/ui/popup'

import * as SC from './styled'


const StudentsFields: FC = () => {
    return (<SC.SearchAndSortContainer>
        <SC.InputWrapper>
            <InputComponent 
            onChange={(event): string => (event.target.value.trim())} 
            name="search" 
            value=""
            placeholder="Поиск по имени"
            >
            </InputComponent>
        </SC.InputWrapper>
        <SC.PopupWrapper>
            <PopupComponent 
             items={[
                'Имя А-Я',
                'Имя Я-А',
                'Сначала моложе',
                'Сначала старше',
                'Высокий рейтинг',
                'Низкий рейтинг'
              ]}
            value="Имя А-Я"
            />
        </SC.PopupWrapper>
    </SC.SearchAndSortContainer>)
}

export default StudentsFields
