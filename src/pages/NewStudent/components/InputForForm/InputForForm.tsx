import React, { FC, useState } from 'react'

import { isEmailValid, isDateValid, isNumberValid, isEmptyField } from "@utils/validators"

import * as SC from './styled'


export type InputFormProps = {
  subTitle: string,
  placeholder?: string
  error?: boolean
  onChange: (value: string) => void;
} 



const InputForForm: FC<InputFormProps> = (props) => {
  const {
    subTitle,
    placeholder,
    error,
    onChange
  } = props

  const [inputValue, setInputValue] = useState('')
  const [isTryingToFix, setIsTryingToFix] = useState(false)
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    onChange(event.target.value)
  }

  const isEmptyAndTryingTofix = (value: string, isTryingToFix: boolean):boolean => {
    return !isTryingToFix && !isEmptyField(value) 
  }
  
  return (
    <SC.Base>
      <SC.Title>
        {subTitle}
      </SC.Title>
      <SC.CustomInput
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      onFocus={() => setIsTryingToFix(true)}
      onBlur={() => setIsTryingToFix(false)}
      />
    
      { error
        && !isTryingToFix 
        && isEmptyField(inputValue) 
        && <SC.ErrorMessage>Это поле обязательное</SC.ErrorMessage>
      }

      { error
        && subTitle === "Email" 
        && isEmptyAndTryingTofix(inputValue, isTryingToFix)
        && !isEmailValid(inputValue) 
        && <SC.ErrorMessage>Введите email в виде ivanov@mail.ru</SC.ErrorMessage>
      } 
      
      { error
        && subTitle === "Рейтинг"
        && isEmptyAndTryingTofix(inputValue, isTryingToFix) 
        && +inputValue < 1   
        && <SC.ErrorMessage>Рейтинг должен быть больше нуля</SC.ErrorMessage>
      }

      { error
        && subTitle === "Рейтинг"
        && isEmptyAndTryingTofix(inputValue, isTryingToFix)
        && +inputValue > 999  
        && <SC.ErrorMessage>Рейтинг должен быть меньше 1000</SC.ErrorMessage>
      }

      { error
        && subTitle === "Рейтинг" 
        && isEmptyAndTryingTofix(inputValue, isTryingToFix) 
        && !isNumberValid(inputValue)  
        && <SC.ErrorMessage>Рейтинг должен быть числом</SC.ErrorMessage>
      } 
      { error
        && subTitle === "День Рождения"  
        && isEmptyAndTryingTofix(inputValue, isTryingToFix) 
        && !isDateValid(inputValue)  
        && <SC.ErrorMessage>Введите дату рождения в формате YYYY-MM-DD</SC.ErrorMessage>
      } 
    </SC.Base>
  )
}

export default InputForForm