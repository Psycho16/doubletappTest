import React, { forwardRef } from 'react'
import { UseFormSetValue, UseFormRegister } from 'react-hook-form'

import useOutsideClick from '@hooks/common/useOutsideClick'
import { IFormInput } from "@models/students/EntityModels/student"
import {ReactComponent as CheckIcon} from '@assets/icons/check.svg'

import * as SC from './styled'


export type SelectProps = {
  options: OptionType[]
  name: any
  setValue: UseFormSetValue<IFormInput>
  subTitle: string
  placeholder?: string
  error?: string
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}
type OptionType = {
  value: string
  label: string
}


const Select = forwardRef<HTMLInputElement,  SelectProps & ReturnType<UseFormRegister<IFormInput>>>(
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

    const [selectedValue, setSelectedValue] = React.useState(placeholder)
    const [isVisiblePopup, setIsVisiblePopup] = React.useState(false)
    const popupRef = React.useRef(null)

    const onChangeSelect = (label:string ,value: string) => {
      setSelectedValue(label)
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
          
        {isVisiblePopup ? 
          <SC.Options>
            {options &&
              options.map(option => 
                option.label === selectedValue 
                ?
                <SC.OptionActive 
                  onClick={() => onChangeSelect(option.label, option.value)} 
                  key={option.value}
                >
                  {option.label}
                  <SC.IconActive>{React.createElement(CheckIcon)}</SC.IconActive> </SC.OptionActive>
                :
             
              <SC.Option 
                onClick={() => onChangeSelect(option.label, option.value)} 
                key={option.value}
              >
                {option.label}
              </SC.Option>
              ) 
            }
          </SC.Options>
          : ""
        }
          {
            isVisiblePopup ?
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

Select.displayName = "Select"

export default Select
