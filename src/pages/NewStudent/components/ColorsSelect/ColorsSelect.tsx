import React, { FC, useState, useRef } from 'react'
import { layoutColors } from '@consts/studentArrays'

import useOutsideClick from '@hooks/common/useOutsideClick'
import { SelectProps } from '@components/ui/Select'

import * as SC from './styled'


const ColorsSelect: FC<SelectProps> =
  (props) => {
    const {
      subTitle,
      placeholder,
      options,
      error,
      onChange,
      icon
  } = props

  const [selectedLabel, setSelectedLabel] = useState(placeholder)
  const [selectedValue, setSelectedValue] = useState('ffffff')
  const [isVisiblePopup, setIsVisiblePopup] = useState(false)
  const popupRef = useRef(null)

  const onChangeSelect = (label:string ,value: string) => {
    setSelectedLabel(label)
    setSelectedValue(value)
    onChange(value)
  }

  useOutsideClick(popupRef, () => {
    setIsVisiblePopup(false)
  })


    return (
      <SC.Base>
        <SC.Title>
          {subTitle}
        </SC.Title>
        <SC.PopupSelect 
          onClick={() =>  setIsVisiblePopup(!isVisiblePopup)} 
        >
          {
            selectedLabel === placeholder 
              ? 
            <SC.PopupSpanPlaceholder>
              {selectedLabel}
            </SC.PopupSpanPlaceholder> 
              : 
            <SC.PopupSelectSpan>
              {selectedLabel}
              <SC.ColorCircle 
                style={{background: layoutColors[selectedValue]}}
              />
            </SC.PopupSelectSpan> 
          }
          
          {isVisiblePopup 
            && 
          <SC.Options>
            { options &&
              options.map(option => 
                <SC.ColorCircle 
                  onClick={() => onChangeSelect(option.label,option.value)} 
                  key={option.value}
                  style={{ background: layoutColors[option.value]}}
                />
              )
            }
          </SC.Options>
          }
          {
            isVisiblePopup 
              ?
            icon && <SC.RotatedIcon 
            onClick={() => setIsVisiblePopup(!isVisiblePopup)} 
            >
              {React.createElement(icon) }
            </SC.RotatedIcon>
              :
            icon && <SC.Icon 
            onClick={() => setIsVisiblePopup(!isVisiblePopup)} 
            >
              {React.createElement(icon)}
            </SC.Icon> 
          }
          
        </SC.PopupSelect>
        
        { error 
          && !isVisiblePopup 
          && selectedLabel === placeholder 
          && <SC.ErrorMessage>Это поле обязятельное</SC.ErrorMessage>
        }
        
      </SC.Base>
    )
  }


export default ColorsSelect
