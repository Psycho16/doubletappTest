import React, { ChangeEvent, useState, useEffect, FC } from "react"
import { useForm } from "react-hook-form"
import { Redirect } from "react-router"

import Select from "@components/ui/Select"
import { useRootStore } from '@hooks/common/useStore'
import Button from "@components/ui/Button"
import { isEmailValidRegex, isDateValidRegex } from "@utils/validators"
import { ReactComponent as smallTriangle } from '@assets/icons/small-triangle-down.svg'
import { IFormInput } from "@models/students/EntityModels/student"

import ColorsSelect from "../ColorsSelect"
import InputForForm from "../InputForForm"

import * as SC from './styled'


export const AddStudentForm: FC = () => {
  const { handleSubmit, formState: {errors}, setValue, setError } = useForm<IFormInput>()
  const { studentsStore: { addStudentRequest } } = useRootStore()
  const [img, setImg] = useState<string | File>("")
  const [isSubmitted, setIsSubmitted] = useState(false)


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

  const validateFields = (data: IFormInput) => {
    let isValidForm = true

    if (data.specialty === "") {
      isValidForm = false
      setError("specialty", {
                type: 'required',
                message: 'Это обязательное поле'
              })
    }
    if (data.group === "") {
      isValidForm = false
      setError("group", {
                type: 'required',
                message: 'Это обязательное поле'
              })
    }
    if (data.color === "") {
      isValidForm = false
      setError("color", {
                type: 'required',
                message: 'Это обязательное поле'
              })
    }
    if (data.sex === "") {
      isValidForm = false
      setError("sex", {
                type: 'required',
                message: 'Это обязательное поле'
              })
    }
    if (data.email === "") {
      isValidForm = false
      setError("email", {
        type: 'required',
        message: 'Это обязательное поле'  
              })
    }
    if (data.email !== "" && !isEmailValidRegex.test(data.email)) {
      isValidForm = false
      setError("email", {
        type: 'emailPattern',
        message: 'Введите корректный email(например ivanov@mail.ru)'  
              })
    }
    if (data.name === "") {
      isValidForm = false
      setError("name", {
        type: 'required',
        message: 'Это обязательное поле'  
              })
    }
    if (data.rating === "") {
      isValidForm = false
      setError("rating", {
        type: 'required',
        message: 'Это обязательное поле'  
              })
    }
    if (data.rating !== "" && +data.rating < 1) {
      isValidForm = false
      setError("rating", {
        type: 'min',
        message: 'Рейтинг должен быть положительным'  
              })
    }
    if (+data.rating > 999) {
      isValidForm = false
      setError("rating", {
        type: 'max',
        message: 'Рейтинг должен быть меньше 1000'  
              })
    }
    if (data.birthday === "") {
      isValidForm = false
      setError("birthday", {
        type: 'required',
        message: 'Это обязательное поле'  
              })
    }
    if (data.birthday !== "" && !isDateValidRegex.test(data.birthday)) {
      isValidForm = false
      setError("birthday", {
        type: 'birthdayPattern',
        message: 'Введите дату рождения в формате YYYY-MM-DD'  
              })
    }
    return isValidForm
  }
  const onSubmit = (data: IFormInput) => {
    data.avatar = ( img ?  img : "")
    const formData = new FormData()
          
    if (validateFields(data)) {

      for (const [key, value] of Object.entries(data)) {
        formData.append(key, value)
      }

      addStudentRequest.send(formData).then(() =>  setIsSubmitted(true))
    }
  }

  if (isSubmitted) return <Redirect to="/" />

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setImg(e.target.files[0])
      }
  }


  return (
      <SC.FormWrapper
      >
      <SC.AvatarInputWrapper>
          <SC.AvatarLabel htmlFor="upload-avatar">
            {img === "" ? 
              <SC.LabelCircle>
                <SC.LabelCircleText>ФИ</SC.LabelCircleText>
              </SC.LabelCircle> 
            : 
              <SC.LoadedImage src={URL.createObjectURL(img)} alt="avatar" id="target"/>
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
        error={errors.name?.type}
        placeholder="Иванов Иван Иванович"
        subTitle={"ФИО"}
        onChange={(value: string) => {
          setValue('name', value)
        }}
        />
        
      </SC.InputWrapper>

      <SC.InputWrapper>
        <InputForForm
        error={errors.email?.type}
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
          error={errors.specialty?.type}
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
          error={errors.group?.type}
          icon={smallTriangle}
          onChange={(value: string) => {
            setValue('group', value)
          }}
        />
      </SC.InputWrapper>

      <SC.InputWrapper >
      <InputForForm
        error={errors.rating?.type}
        placeholder="0"
        subTitle={"Рейтинг"}
        onChange={(value: string) => {
          setValue('rating', value)
        }}
        />
      </SC.InputWrapper>


      <SC.InputWrapper >
      <InputForForm
        error={errors.birthday?.type}
        placeholder="YYYY-MM-DD"
        subTitle={"День Рождения"}
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
          error={errors.sex?.type}
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
          error={errors.color?.type}
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
      
    </SC.FormWrapper>
  )
}

export default AddStudentForm
