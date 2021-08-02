import React, { ChangeEvent, useState, useEffect, FC } from "react"
import { useForm } from "react-hook-form"
import { Redirect } from "react-router"

import Select from "@components/ui/Select"
import { useRootStore } from '@hooks/common/useStore'
import Button from "@components/ui/Button"
import { isValidFields } from "@utils/validators"
import { ReactComponent as smallTriangle } from '@assets/icons/small-triangle-down.svg'
import { IFormInput } from "@models/students/EntityModels/student"
import DatePickerWithText from "@components/ui/DatePickerWithText"

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
          options={[
            {value: 'mt', label: 'Математика'},
            {value: 'kb', label: 'Компьютерная безопасность'},
            {value: 'ft', label: 'Фундаментальная информатика и информационные технологии'},
            {value: 'kn', label: 'Компьютерные науки'},
            {value: 'ms', label: 'Математическое обеспечение и администрирование информационных систем'}
          ]}
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
          options={[
            {value:"mt-101", label:'МТ-101'},
            {value:"mt-102",label:'МТ-102'},
            {value:"mt-202",label:'МТ-202'},
            {value:"mt-201",label:'МТ-201'},
            {value:"mt-301",label:'МТ-301'},
            {value:"mt-401",label:'МТ-401'},
            {value:"ft-101",label:'ФИИТ-101'},
            {value:"ft-201",label:'ФИИТ-201'},
            {value:"ft-301",label:'ФИИТ-301'},
            {value:"ft-401",label:'ФИИТ-401'},
            {value:"ms-101",label:'МОАиС-101'},
            {value:"ms-201",label:'МОАиС-201'},
            {value:"ms-301",label:'МОАиС-301'},
            {value:"ms-401",label:'МОАиС-401'},
            {value:"kn-101",label:'КН-101'},
            {value:"kn-201",label:'КН-201'},
            {value:"kn-301",label:'КН-301'},
            {value:"kn-401",label:'КН-401'},
            {value:"kb-101",label:'КБ-101'},
            {value:"kb-201",label:'КБ-201'},
            {value:"kb-301",label:'КБ-301'},
            {value:"kb-401",label:'КБ-401'},
            {value:"kb-501",label:'КБ-501'}
          ]}
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
          options={[
            {value:'blue', label:'Синий'},
            {value:'red', label:'Красный'}, 
            {value:'green', label:'Зеленый'}, 
            {value:'yellow', label:'Желтый'}, 
            {value:'black', label:'Черный'}, 
            {value:'orange', label:'Оранжевый'},
            {value: 'rainbow', label: 'Радужный'}
          ]}
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
