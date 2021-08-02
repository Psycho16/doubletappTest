import React, { FC, useState } from 'react'
import DatePicker from 'react-datepicker'

import './stylesOfDatePicker.css'


require('react-datepicker/dist/react-datepicker.css')


import { getBirthdayFromDate } from '@utils/getStudentInfo'

import * as SC from './styled'


type DatePickerWithTextProps = {
  subTitle: string
  onChange: (value: string) => void
  placeholder?: string
  error?: boolean
  dateFormat?: string
  maxDate?: Date
} 


const DatePickerWithText:FC<DatePickerWithTextProps> = (props) => {
  const {
    subTitle,
    onChange,
    placeholder,
    error,
    maxDate,
    dateFormat
  } = props

  const [startDate, setStartDate] = useState<Date | null>(null)
  const [isTryingToFix, setIsTryingToFix] = useState(false)

  const setInputValue = (date: Date ) => {
      onChange(getBirthdayFromDate(date))
      setStartDate(date)
  }


  return (
    <SC.Base>
    <SC.Title>{subTitle}</SC.Title>
      <DatePicker
          selected={startDate}
          onChange={setInputValue}
          maxDate={maxDate}
          dateFormat={dateFormat}
          placeholderText={placeholder}
          onFocus={() => setIsTryingToFix(true)}
          onBlur={() => setIsTryingToFix(false)}
        />
        { error 
          && startDate === null
          && !isTryingToFix
          && <SC.ErrorMessage>Это поле обязательное</SC.ErrorMessage>
                }
    </SC.Base>
  )
}

export default DatePickerWithText


