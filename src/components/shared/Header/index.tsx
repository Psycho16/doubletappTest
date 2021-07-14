import React, { FC } from 'react'

import { Container } from '@components/styled/Container'
import { ReactComponent as LogoIcon } from '@assets/icons/logo.svg'

import * as SC from './styled'


const Header: FC = () => {
  return (
    <SC.Base>
      <Container>
        <SC.Logo>
          <LogoIcon />
        </SC.Logo>
        <SC.Title>
          STUDENTS by {' '}
          <SC.TitleAccent>
            github-user-name
          </SC.TitleAccent>
        </SC.Title>
      </Container>
    </SC.Base>
  )
}

export default Header