import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import AuthLayout from '@components/shared/AuthLayout'
import Button from '@components/ui/Button'
import InputComponent from '@components/ui/Input'
import { LoginRequest } from '@models/auth/login'
import { isEmailValid } from '@utils/validators'

import * as AuthFormLayoutSC from '../styled/AuthFormLayout'

import * as SC from './styled'
import useLoginFormLogic from './useLoginFormLogic'


type Props = {
  onRegisterClick: () => void;
}

const LoginForm: FC<Props> = (props) => {
  const { onRegisterClick } = props
  const {
    isLoading,
    onSubmit,
    submittionError
  } = useLoginFormLogic()

  const {
    handleSubmit,
    formState: {errors},
    control
  } = useForm<LoginRequest>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  return (
    <AuthLayout 
      title="LOG IN" 
      onLabelButtonClick={onRegisterClick}
      labelButtonText="Зарегистрироваться"
      bottomLabelText="Нет аккаунта?"
      error={submittionError}
    >
      <SC.Base>
        <form autoComplete={'on'}>
          <AuthFormLayoutSC.Input>
            <Controller
              rules={{
                required: {
                  value: true,
                  message: "Это обязательное поле"
                },
                validate: {
                  validEmail: (value): boolean | string => isEmailValid(value) || 'Введите корректный Email'
                }
              }}
              control={control} 
              name="email"
              render={({field: { onChange, value, name }}): JSX.Element => (
                <InputComponent
                  onChange={(event): void => onChange(event.target.value.trim())}
                  value={value.trim()}
                  name={name}
                  mask={false}
                  autoComplete="username"
                  placeholder={'Enter your email'}
                  error={errors.email?.message}
                />
              )}
            />
          </AuthFormLayoutSC.Input>

          <AuthFormLayoutSC.Input>
            <Controller
              rules={{
                required: {
                  value: true,
                  message: "Это обязательное поле"
                }
              }}
              control={control} 
              name="password" 
              render={({field: { onChange, value, name }}): JSX.Element => (
                <InputComponent
                  onChange={onChange}
                  value={value}
                  name={name}
                  mask={false}
                  placeholder="Enter your password"
                  error={errors.password?.message}
                  type="password"
                  autoComplete="current-password"
                />
              )}
            />
          </AuthFormLayoutSC.Input>
          
          <AuthFormLayoutSC.Button>
            <Button 
              onClick={handleSubmit(onSubmit)} 
              text={'Войти'} 
              disabled={isLoading} 
            />
          </AuthFormLayoutSC.Button>
        </form>
      </SC.Base>
    </AuthLayout>
 )
}

export default observer(LoginForm)