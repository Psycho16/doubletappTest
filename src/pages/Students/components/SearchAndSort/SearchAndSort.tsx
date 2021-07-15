import React, { FC } from 'react'

import InputComponent from '@components/ui/Input'
import PopupComponent from '@components/ui/popup'
import {ReactComponent as SearchIcon} from '@assets/icons/search.svg'

import * as SC from './styled'


const StudentsFields: FC = () => {
  return (
    <SC.SearchAndSortContainer>
      <SC.InputWrapper>
        <SearchIcon style={{position:"absolute", top: "calc(50% - 9px)", left: "20px"}}/>
        <InputComponent
          onChange={(event): string => event.target.value.trim()}
          name="search"
          value=""
          placeholder="Поиск по имени"
          mask={false}
        ></InputComponent>
      </SC.InputWrapper>
      <SC.PopupWrapper>
        <PopupComponent
          items={['Имя А-Я', 'Имя Я-А', 'Сначала моложе', 'Сначала старше', 'Высокий рейтинг', 'Низкий рейтинг']}
          hasIcon
        />
      </SC.PopupWrapper>
    </SC.SearchAndSortContainer>
  )
}

export default StudentsFields
