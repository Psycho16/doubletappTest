import React, { FC } from 'react'

import InputComponent from '@components/ui/Input'
import PopupComponent from '@components/ui/popup'
import {ReactComponent as SearchIcon} from '@assets/icons/search.svg'
import StudentsStore from '@stores/Students/StudentsStore'

import * as SC from './styled'


const StudentsFields: FC = () => {
  return (
    <SC.SearchAndSortContainer>
      <SC.InputWrapper>
        <SearchIcon style={{position:"absolute", top: "calc(50% - 9px)", left: "20px"}}/>
        <InputComponent
          onChange={event => StudentsStore.setInput(event.target.value)}
          name="search"
          value={StudentsStore.input}
          placeholder="Поиск по имени"
          mask={false}
        ></InputComponent>
      </SC.InputWrapper>
      <SC.PopupWrapper>
        <PopupComponent
          items={['Имя А-Я', 'Имя Я-А', 'Сначала моложе', 'Сначала старше', 'Высокий рейтинг', 'Низкий рейтинг']}
          hasIcon
          type="sort"
        />
      </SC.PopupWrapper>
    </SC.SearchAndSortContainer>
  )
}

export default StudentsFields
