import React from 'react'
import { HttpClientErrorCodes, messages } from '@consts/errorMessages'

import browserHistory from '@utils/browserHistory'
import MainLayout from '@components/shared/MainLayout'
import Button from '@components/ui/Button'
import { Container } from '@components/styled/Container'

import * as SC from './styled'


const NotFoundPage = () => (
  <MainLayout>
    <Container>
      <SC.Message>{messages[HttpClientErrorCodes.NotFound]}</SC.Message>
      <SC.ButtonWrapper>
        <Button
          text="Назад"
          onClick={browserHistory.goBack}
        />
      </SC.ButtonWrapper>
    </Container>
  </MainLayout>
)

export default NotFoundPage
