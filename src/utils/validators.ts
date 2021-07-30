import { IFormInput } from "@models/students/EntityModels/student"

/* eslint-disable max-len */
/* eslint-disable no-useless-escape */
export const isEmailValid = (email: string): boolean => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(email)
}

export const isDateValid = (date: string): boolean => {
  const regex =  /[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/
  return regex.test(date)
}

export function isNumberValid(number: string): boolean {
  const regex = /^-?[\d]*$/
  return regex.test(number)
}

export function isEmptyField(field: string): boolean {
  return field === ""
}

export function isValidFields(data: IFormInput, isReadyToSubmit: boolean) {
    
    if ((isEmptyField(data.specialty))
        || (isEmptyField(data.group))
        || (isEmptyField(data.color))
        || (isEmptyField(data.color))
        || (isEmptyField(data.email))
        || (isEmptyField(data.name))
        || (isEmptyField(data.rating))
        || (isEmptyField(data.birthday)) 
        || (+data.rating < 1)
        || (+data.rating > 999)
        || (!isNumberValid(data.rating)) 
        || (!isDateValid(data.birthday))
        || (!isEmailValid(data.email))
        ) 
          {
            isReadyToSubmit = false
          }

  return isReadyToSubmit
}
