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

  const [value, setValue] = useState('')
  const [isTryToFix, setIsTryToFix] = useState(false)
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    onChange(event.target.value)
  }

  const isEmptyAndTryingTofix = (value: string, isTryToFix: boolean):boolean => {
    return !isTryToFix && !isEmptyField(value) 
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
    
      { error
        && !isTryToFix 
        && isEmptyField(value) 
        && <SC.ErrorMessage>Это поле обязательное</SC.ErrorMessage>
      }

      { error
        && subTitle === "Email" 
        && isEmptyAndTryingTofix(value, isTryToFix)
        && !isEmailValid(value) 
        && <SC.ErrorMessage>Введите email в виде ivanov@mail.ru</SC.ErrorMessage>
      } 
      
      { error
        && subTitle === "Рейтинг"
        && isEmptyAndTryingTofix(value, isTryToFix) 
        && +value < 1   
        && <SC.ErrorMessage>Рейтинг должен быть больше нуля</SC.ErrorMessage>
      }

      { error
        && subTitle === "Рейтинг"
        && isEmptyAndTryingTofix(value, isTryToFix)
        && +value > 999  
        && <SC.ErrorMessage>Рейтинг должен быть меньше 1000</SC.ErrorMessage>
      }

      { error
        && subTitle === "Рейтинг" 
        && isEmptyAndTryingTofix(value, isTryToFix) 
        && !isNumberValid(value)  
        && <SC.ErrorMessage>Рейтинг должен быть числом</SC.ErrorMessage>
      } 
      { error
        && subTitle === "День Рождения"  
        && isEmptyAndTryingTofix(value, isTryToFix) 
        && !isDateValid(value)  
        && <SC.ErrorMessage>Введите дату рождения в формате YYYY-MM-DD</SC.ErrorMessage>
      } 
    </SC.Base>
  )
}

export default InputForForm