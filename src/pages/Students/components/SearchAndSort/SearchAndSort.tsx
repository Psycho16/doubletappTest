import React, { FC } from 'react'

import InputComponent from '@components/ui/Input'
import PopupComponent from '@components/ui/Popup'
import {ReactComponent as SearchIcon} from '@assets/icons/search.svg'
import { useRootStore } from '@hooks/common/useStore'
import {ReactComponent as SortIcon} from '@assets/icons/sort.svg'

import * as SC from './styled'


const StudentsFields: FC = () => {
  const {StudentsStore} = useRootStore()
  return (
    <SC.SearchAndSortContainer>
      <SC.InputWrapper>
        <SearchIcon style={{position:"absolute", top: "calc(50% - 9px)", left: "10px"}}/>
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
          icon={SortIcon}
          type="sort"
        />
      </SC.PopupWrapper>
    </SC.SearchAndSortContainer>
  )
}

export default StudentsFields
