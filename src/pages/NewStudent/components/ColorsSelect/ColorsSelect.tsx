import React, { forwardRef } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { layoutColors } from '@consts/studentArrays'

import useOutsideClick from '@hooks/common/useOutsideClick'
import { IFormInput } from "@models/students/EntityModels/student"
import { SelectProps } from '@components/ui/Select'

import * as SC from './styled'


const ColorsSelect = forwardRef<HTMLInputElement,  SelectProps & ReturnType<UseFormRegister<IFormInput>>>(
  (props, ref) => {
    const {
      subTitle,
      placeholder,
      options,
      error,
      name,
      onChange,
      onBlur,
      setValue,
      icon
  } = props

  const [selectedLabel, setSelectedLabel] = React.useState(placeholder)
  const [selectedValue, setSelectedValue] = React.useState('ffffff')
  const [isVisiblePopup, setIsVisiblePopup] = React.useState(false)
  const popupRef = React.useRef(null)

  const onChangeSelect = (label:string ,value: string) => {
    setSelectedLabel(label)
    setSelectedValue(value)
    setValue(name,value)
  }

  useOutsideClick(popupRef, () => {
    setIsVisiblePopup(false)
  })


    return (
      <SC.Base>
        <SC.Input 
          ref={ref} 
          name={name} 
          onChange={onChange} 
          onBlur={onBlur}
        />
        <SC.Title>
          {subTitle}
        </SC.Title>
        <SC.PopupSelect 
          onClick={() => setIsVisiblePopup(!isVisiblePopup)} 
          ref={popupRef}
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
            ? 
          <SC.Options>
            { options &&
              options.map(option => 
                <SC.ColorCircle 
                  onClick={() => onChangeSelect(option.label, option.value)} 
                  key={option.value}
                  style={{ background: layoutColors[option.value]}}
                />
              )
            }
          </SC.Options>
            : ""
          }
          {
            isVisiblePopup 
              ?
            icon && <SC.RotatedIcon>{React.createElement(icon)}</SC.RotatedIcon>
              :
            icon && <SC.Icon>{React.createElement(icon)}</SC.Icon> 
          }
          
        </SC.PopupSelect>
        {error === 'required' && <SC.ErrorMessage>Это поле обязятельное</SC.ErrorMessage>}
        
      </SC.Base>
    )
  }
)

ColorsSelect.displayName = "ColorsSelect"

export default ColorsSelect
