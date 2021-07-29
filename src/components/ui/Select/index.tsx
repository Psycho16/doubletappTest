import React, { FC, useState, useRef } from 'react'

import useOutsideClick from '@hooks/common/useOutsideClick'
import {ReactComponent as CheckIcon} from '@assets/icons/check.svg'

import * as SC from './styled'


export type SelectProps = {
  options: OptionType[]
  subTitle: string
  placeholder?: string
  error?: string
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  tabIndex?: number
  onChange: (value: string) => void 
}
type OptionType = {
  value: string
  label: string
}


const Select: FC<SelectProps> =
  (props) => {
    const {
      subTitle,
      placeholder,
      options,
      error,
      onChange,
      icon
    } = props

    const [selectedValue, setSelectedValue] = useState(placeholder)
    const [isVisiblePopup, setIsVisiblePopup] = useState(false)
    const [isTryToFix, setIsTryToFix] = useState(false)
    const popupRef = useRef(null)

    const onChangeSelect = (label:string ,value: string) => {
      setSelectedValue(label)
      onChange(value)
      setIsTryToFix(true)
    }

    const openPopup = () => {
      setIsVisiblePopup(!isVisiblePopup)
      setIsTryToFix(!isTryToFix)
    }

    useOutsideClick(popupRef, () => {
      setIsVisiblePopup(false)
      setIsTryToFix(false)
    })



    return (
      <SC.Base>
        <SC.Title>
          {subTitle}
        </SC.Title>
        <SC.PopupSelect 
          onClick={openPopup} 
          ref={popupRef}
        >
        {
            selectedValue === placeholder 
              ? 
            <SC.PopupSpanPlaceholder>
              {selectedValue}
            </SC.PopupSpanPlaceholder> 
              : 
            <SC.PopupSelectSpan>
              {selectedValue}
            </SC.PopupSelectSpan> 
        }
          
        {isVisiblePopup &&
          <SC.Options>
            {options &&
              options.map(option => 
                option.label === selectedValue 
                ?
                <SC.OptionActive 
                  onClick={() => onChangeSelect(option.label,option.value)} 
                  key={option.value}
                >
                  {option.label}
                  <SC.IconActive>{React.createElement(CheckIcon)}</SC.IconActive> </SC.OptionActive>
                :
             
                <SC.Option 
                  onClick={() => onChangeSelect(option.label,option.value)} 
                  key={option.value}
                >
                  {option.label}
                </SC.Option>
              ) 
            }
          </SC.Options>

        }
          {
            isVisiblePopup ?
            icon && <SC.RotatedIcon>{React.createElement(icon)}</SC.RotatedIcon>
            :
            icon && <SC.Icon>{React.createElement(icon)}</SC.Icon> 
          }
          
        </SC.PopupSelect>
        {!isTryToFix && selectedValue === placeholder && error === 'required' && 
        <SC.ErrorMessage>Это поле обязятельное</SC.ErrorMessage> }
        
      </SC.Base>
    )
  }


export default Select
