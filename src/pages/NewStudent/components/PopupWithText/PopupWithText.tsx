import React, { FC } from 'react'

import PopupComponent from '@components/ui/Popup'
import { ReactComponent as Triangle } from '@assets/icons/popup.svg'

import ColorsPopup from '../ColorsPopup'

import * as SC from './styled'


interface textPopupProps {
  items: string[]
  property: string
  placeholder: string
  type?: string
}
const PopupWithText: FC<textPopupProps> = (props) => {
  const {
    items,
    property,
    placeholder,
    type
  } = props
  return (
      <SC.PopupWithTexttWrapper>
      <SC.PopupTitle>{property}</SC.PopupTitle>
      {items && 
      <SC.PopupWrapper>
        {type === "colors" ? 
        <ColorsPopup placeholder={placeholder} icon={Triangle} items={items}/>
        :
        <PopupComponent placeholder={placeholder} type="withPlaceholder" items={items} icon={Triangle}/>}
      </SC.PopupWrapper>
      }
    </SC.PopupWithTexttWrapper>
  )
}

export default PopupWithText
