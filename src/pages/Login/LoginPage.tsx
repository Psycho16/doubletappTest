import React, { FC, useState } from 'react'

import { Container } from '@components/styled/Container'

import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm/RegisterForm'
import * as SC from './styled'


enum ActiveForm {
  Login = 'login',
  Register = 'register'
}

const LoginPage: FC = () => {
  const [activeForm, setActiveForm] = useState<ActiveForm>(ActiveForm.Login)

  const renderActiveForm = () => {
    switch(activeForm) {
      case ActiveForm.Login:
        return (
          <LoginForm onRegisterClick={() => setActiveForm(ActiveForm.Register)} />
        )
      case ActiveForm.Register:
        return (
          <RegisterForm onLoginClick={() => setActiveForm(ActiveForm.Login)} />
        )
      default:
        return (
          <LoginForm onRegisterClick={() => setActiveForm(ActiveForm.Register)} />
        )
    }
  }

  return (
    <SC.Base>
      <Container>
        {renderActiveForm()}
      </Container>
    </SC.Base>
  )
}

export default LoginPage