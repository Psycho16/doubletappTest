import React, { ChangeEvent, useState, useEffect, FC } from "react"
import { useForm } from "react-hook-form"
import { Redirect } from "react-router"
import { colorsWithRusLabels, groupsWithRusLabels, specialtiesWithRusLabels } from "@consts/studentArrays"

import Select from "@components/ui/Select"
import Button from "@components/ui/Button"
import DatePickerWithText from "@components/ui/DatePickerWithText"
import { isValidFields } from "@utils/validators"
import { ReactComponent as smallTriangle } from '@assets/icons/small-triangle-down.svg'
import { IFormInput } from "@models/students/EntityModels/student"
import { useRootStore } from '@hooks/common/useStore'

import ColorsSelect from "../ColorsSelect"
import InputForForm from "../InputForForm"

import * as SC from './styled'


const AddStudentForm: FC = () => {
  const { handleSubmit, setValue } = useForm<IFormInput>()
  const { studentsStore: { addStudentRequest } } = useRootStore()
  const [currentImg, setCurrentImg] = useState<string | File>("")
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [isFormHasError, setIsFormHasError] = useState(false)


  useEffect(() => {
    setValue('specialty', "")
    setValue('group', "")
    setValue('sex', "")
    setValue('color', "")
    setValue('email', "")
    setValue('name', "")
    setValue('rating', "")
    setValue('birthday', "")
  }, [setValue])

  const onSubmit = (data: IFormInput) => {
    data.avatar = ( currentImg ?  currentImg : "")
          
    if (isValidFields(data, true)) {
      const formData = new FormData()

      for (const [key, value] of Object.entries(data)) {
        formData.append(key, value)
      }
      
      addStudentRequest.send(formData).then(() =>  setIsFormSubmitted(true))
    } else {
      setIsFormHasError(true)
    }
  }


  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setCurrentImg(e.target.files[0])
      }
  }

  // const onSubmitTestData = (data: IFormInput) => {
  //   data.avatar = ( currentImg ?  currentImg : "")
  //   data.specialty = "mt"
  //   data.group  = "mt-301"
  //   data.sex = "m"
  //   data.color = "green"
  //   data.email = "andrey@mail.ru"
  //   data.name = "andrey"
  //   data.rating = "23"
  //   data.birthday = "2000-06-16"
    
  //   const formData = new FormData()
    
  //   for (const [key, value] of Object.entries(data)) {
  //     formData.append(key, value)
  //   }
    
  //   addStudentRequest.send(formData).then(() => setIsFormSubmitted(true))
  // }

  return (
      <SC.FormWrapper>
      {isFormSubmitted && <Redirect to="/" />}
      <SC.AvatarInputWrapper>
          <SC.AvatarLabel htmlFor="upload-avatar">
            {currentImg === "" ? 
              <SC.LabelCircle>
                <SC.LabelCircleText>ФИ</SC.LabelCircleText>
              </SC.LabelCircle> 
            : 
              <SC.LoadedImage src={URL.createObjectURL(currentImg)} alt="avatar" id="target"/>
            }
            <SC.LabelText>
              <SC.LabelTextTitle>Сменить аватар</SC.LabelTextTitle>
              <SC.LabelTextSubtitle>500x500</SC.LabelTextSubtitle>
            </SC.LabelText>
          </SC.AvatarLabel>

            <SC.AvatarInput 
              id="upload-avatar" 
              type="file"
              onChange={e => onImageChange(e)}
              accept="image/*"
            />

      </SC.AvatarInputWrapper>

      <SC.InputsWrapper>

      <SC.InputWrapper >
        <InputForForm
          error={isFormHasError}
          placeholder="Иванов Иван Иванович"
          subTitle={"ФИО"}
          onChange={(value: string) => {
            setValue('name', value)
          }}
          value="Имя"
          disabled={true}
        />
        
      </SC.InputWrapper>

      <SC.InputWrapper>
        <InputForForm
          error={isFormHasError}
          placeholder="ivanov@mail.ru"
          subTitle={"Email"}
          onChange={(value: string) => {
            setValue('email', value)
          }}
        />
      </SC.InputWrapper>

      <SC.InputWrapper>
        <Select
          options={specialtiesWithRusLabels}
          subTitle="Специальность"
          placeholder="Выбрать"
          icon={smallTriangle}
          onChange={(value: string) => {
            setValue('specialty', value)
          }}
          error={isFormHasError}
        />      
      </SC.InputWrapper>

      <SC.InputWrapper>
        <Select
          options={groupsWithRusLabels}
          subTitle="Группа"
          placeholder="Выбрать"
          error={isFormHasError}
          icon={smallTriangle}
          onChange={(value: string) => {
            setValue('group', value)
          }}
        />
      </SC.InputWrapper>

      <SC.InputWrapper >
        <InputForForm
          error={isFormHasError}
          placeholder="0"
          subTitle={"Рейтинг"}
          onChange={(value: string) => {
            setValue('rating', value)
          }}
        />
      </SC.InputWrapper>


      <SC.InputWrapper >
        <DatePickerWithText
          error={isFormHasError}
          placeholder="YYYY-MM-DD"
          dateFormat="yyyy-MM-dd"
          subTitle={"День Рождения"}
          maxDate={new Date()}
          onChange={(value: string) => {
            setValue('birthday', value)
          }}
        />
      </SC.InputWrapper>

      <SC.InputWrapper >
        <Select
          options={[
            {value: 'm', label: 'Мужской'},
            {value: 'f', label: 'Женский'}
          ]}
          subTitle="Пол"
          placeholder="Выбрать"
          error={isFormHasError}
          icon={smallTriangle}
          onChange={(value: string) => {
            setValue('sex', value)
          }}
        />
      </SC.InputWrapper>

      <SC.InputWrapper tabIndex={0}>
        <ColorsSelect
          options={colorsWithRusLabels}
          subTitle={"Любимый цвет"}
          placeholder="Выбрать"
          error={isFormHasError}
          icon={smallTriangle}
          onChange={(value: string) => {
            setValue('color', value)
          }}
        />
      </SC.InputWrapper>
    
      </SC.InputsWrapper>

      <SC.ButtonWrapper tabIndex={0}>
        <Button 
          onClick={handleSubmit(onSubmit)} 
          text="Создать"
          disabled={addStudentRequest.isLoading}
        />
      </SC.ButtonWrapper>
      {/* <Button onClick={handleSubmit(onSubmitTestData)} text={"Отправить тестовые данные"}/> */}
    </SC.FormWrapper>
  )
}

export default AddStudentForm
