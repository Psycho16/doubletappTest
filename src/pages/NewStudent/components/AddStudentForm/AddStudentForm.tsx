import React from "react"
import { useForm } from "react-hook-form"

import Select from "@components/ui/Select"
import { useRootStore } from '@hooks/common/useStore'
import Button from "@components/ui/Button"
import { isEmailValid, isDateValid } from "@utils/validators"
import { ReactComponent as smallTriangle } from '@assets/icons/smallTriangleDown.svg'
import { IFormInput } from "@models/students/EntityModels/student"

import ColorsSelect from "../ColorsSelect"

import * as SC from './styled'






export default function AddStudentForm() {
  const { register, handleSubmit, formState: {errors}, setValue } = useForm<IFormInput>()
  const { studentsStore: { addStudentRequest } } = useRootStore()
  const [img, setImg] = React.useState("")

  const onSubmit = (data: IFormInput) => {
    data.avatar = ( img ?  img : "")
    const formData = new FormData()
    
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value)
    }
    
    addStudentRequest.send(formData)

    setImg("")
    setValue("name", "")
    setValue("birthday", "")
    setValue("email", "")
    setValue("rating", "")
    setValue("color", "")
    setValue("group", "")
    setValue("specialty", "")
    setValue("sex", "")
  }

  const onImageChange = (e: any) => {
      if (e.target.files && e.target.files[0]) {
        setImg(e.target.files[0])
      }
      
  }

  // const deleteImage = () => {
  //   setImg("")
  //   // После этого действия нельзя еще раз добавить ту же самую картинку
  // }



  return (
    <SC.FormWrapper
    onSubmit={handleSubmit(onSubmit)}
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
            {/* <SC.DeleteAvatarButton type="button" onClick={() => deleteImage()}/> */}
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

      <SC.InputWrapper>
        <SC.InputTitle>ФИО</SC.InputTitle>
        <SC.CustomInput 
          placeholder="Иванов Иван Иванович"  
          {...register("name", { required: true })} 
        />
        {errors.name?.type === 'required' && <SC.ErrorMessage>Это поле обязательное</SC.ErrorMessage>}
      </SC.InputWrapper>

      <SC.InputWrapper>
        <SC.InputTitle>Email</SC.InputTitle>
        <SC.CustomInput 
          placeholder="ivanov@mail.ru"
          {...register("email",{required: true, pattern: isEmailValid})} 
        />
        {errors.email?.type === 'required' && <SC.ErrorMessage>Это поле обязательное</SC.ErrorMessage>}
        {errors.email?.type === 'pattern' && <SC.ErrorMessage>Введите email в виде {"ivanov@mail.ru"}</SC.ErrorMessage>}
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
          {...register("specialty", {required: true})}
          setValue={setValue}
          subTitle="Специальность"
          placeholder="Выбрать"
          error={errors.specialty?.type}
          icon={smallTriangle}
        />

      
      </SC.InputWrapper>

      <SC.InputWrapper>
        <Select
          options={[
            {value:"mt-101", label:'МТ-101'},
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
            {value:"mt-102",label:'МТ-102'},
            {value:"mt-202",label:'МТ-202'}
          ]}
          {...register("group", {required: true})}
          setValue={setValue}
          subTitle="Группа"
          placeholder="Выбрать"
          error={errors.group?.type}
          icon={smallTriangle}
        />
      </SC.InputWrapper>

      <SC.InputWrapper>
        <SC.InputTitle>Рейтинг</SC.InputTitle>
        <SC.CustomInput
          placeholder="0"
          {...register("rating", {required: true, min: 0, max: 1000})} 
        />
        {errors.rating?.type === 'required' && <SC.ErrorMessage>Это поле обязательное</SC.ErrorMessage>}
        {errors.rating?.type === 'min' && <SC.ErrorMessage>Введите значение больше нуля</SC.ErrorMessage>}
        {errors.rating?.type === 'max' && <SC.ErrorMessage>Введите значение меньше тысячи</SC.ErrorMessage>}
      </SC.InputWrapper>

      <SC.InputWrapper>
        <SC.InputTitle>Дата рождения</SC.InputTitle>
        <SC.CustomInput 
          placeholder="YYYY-MM-DD" 
          {...register("birthday", {required: true,pattern: isDateValid })} 
        />
        {errors.birthday?.type === 'required' && <SC.ErrorMessage>Это поле обязятельное</SC.ErrorMessage>}
        {errors.birthday?.type === 'pattern' && <SC.ErrorMessage>Введите email в виде {"YYYY-MM-DD"}</SC.ErrorMessage>}
      </SC.InputWrapper>

      <SC.InputWrapper>
        <Select
          options={[
            {value: 'm', label: 'Мужской'},
            {value: 'f', label: 'Женский'}
          ]}
          {...register("sex", {required: true})}
          setValue={setValue}
          subTitle="Пол"
          placeholder="Выбрать"
          error={errors.sex?.type}
          icon={smallTriangle}
        />
      </SC.InputWrapper>

      <SC.InputWrapper>
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
          {...register("color", {required: true})}
          setValue={setValue}
          subTitle={"Любимый цвет"}
          placeholder="Выбрать"
          error={errors.color?.type}
          icon={smallTriangle}
        />
      </SC.InputWrapper>
    
      </SC.InputsWrapper>
      
      
      <SC.ButtonWrapper>
      <Button 
        onClick={handleSubmit(onSubmit)} 
        text="Добавить студента"
      />
      </SC.ButtonWrapper>
      
    </SC.FormWrapper>
  )
}

