import React, { FC } from 'react'

import InputComponent from '@components/ui/Input'
import PopupComponent from '@components/ui/Popup'
import {ReactComponent as SearchIcon} from '@assets/icons/search.svg'
import { useRootStore } from '@hooks/common/useStore'
import {ReactComponent as SortIcon} from '@assets/icons/sort.svg'

import * as SC from './styled'


const StudentsFields: FC = () => {
  const {studentsStore} = useRootStore()

  return (
    <SC.SearchAndSortContainer>
      <SC.InputWrapper>
        <SC.SearchIconWrapper>
          <SearchIcon/>
        </SC.SearchIconWrapper>
        
        <InputComponent
          onChange={event => studentsStore.setInput(event.target.value)}
          name="search"
          value={studentsStore.input}
          placeholder="Поиск по имени"
          mask={false}
        ></InputComponent>
      </SC.InputWrapper>
      <SC.PopupWrapper>
        <PopupComponent
          items={['Имя А-Я', 'Имя Я-А', 'Сначала моложе', 'Сначала старше', 'Высокий рейтинг', 'Низкий рейтинг']}
          icon={SortIcon}
          type="sort"
        />
      </SC.PopupWrapper>
    </SC.SearchAndSortContainer>
  )
}

export default StudentsFields
