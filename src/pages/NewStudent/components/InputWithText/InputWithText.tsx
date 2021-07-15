import React, { FC } from 'react'

import InputComponent from '@components/ui/Input'

import * as SC from './styled'


interface textInputProps {
  type: string
  property: string
  placeholder: string
}
const InputWithText: FC<textInputProps> = (props) => {
  const {
    type,
    property,
    placeholder
  } = props
  return (
      <SC.InputWithTextWrapper>
      <SC.InputTitle>{property}</SC.InputTitle>
      <InputComponent 
      placeholder={placeholder}
      onChange={(event): string => event.target.value.trim()}
      value=""
      name="ФИО"
      mask={false}
      type={type}
      />
    </SC.InputWithTextWrapper>
  )
}

export default InputWithText
