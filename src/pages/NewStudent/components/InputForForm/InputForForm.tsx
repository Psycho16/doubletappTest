import React, { FC, useState } from 'react'

import * as SC from './styled'


export type InputFormProps = {
  subTitle: string,
  placeholder?: string
  error?: string
  onChange: (value: string) => void;
} 



const InputForForm: FC<InputFormProps> = (props) => {
  const {
    subTitle,
    placeholder,
    error,
    onChange
  } = props

  const [value, setValue] = useState('')
  const [isTryToFix, setIsTryToFix] = useState(false)
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    onChange(event.target.value)
  }
  
  return (
    <SC.Base>
      <SC.Title>
        {subTitle}
      </SC.Title>
      <SC.CustomInput
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onFocus={() => setIsTryToFix(true)}
      onBlur={() => setIsTryToFix(false)}
      />
    
      {!isTryToFix && value === "" && error && error==='required' ?
        <SC.ErrorMessage>Это поле обязательное</SC.ErrorMessage> : ""}
      {!isTryToFix && value !== "" && error && error==='emailPattern' ?
        <SC.ErrorMessage>Введите email в виде ivanov@mail.ru</SC.ErrorMessage> : ""} 
           {!isTryToFix && value !== "" && +value < 1  && subTitle === "Рейтинг" && error && error==='min' ?
        <SC.ErrorMessage>Рейтинг должен быть больше нуля</SC.ErrorMessage> : ""} 
         {!isTryToFix && value !== "" && +value > 999 && subTitle === "Рейтинг" && error && error==='max' ?
        <SC.ErrorMessage>Рейтинг должен быть меньше 1000</SC.ErrorMessage> : ""} 
        {!isTryToFix && value !== "" && error && error==='birthdayPattern' ?
        <SC.ErrorMessage>Введите дату рождения в формате YYYY-MM-DD</SC.ErrorMessage> : ""} 
    </SC.Base>
  )
}

export default InputForForm