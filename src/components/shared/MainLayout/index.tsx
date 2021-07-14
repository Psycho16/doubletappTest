import React, { FC } from 'react'

import Header from '../Header'

import * as SC from './styled'


const MainLayout: FC = (props) => {
  const { children } = props

  return (
    <SC.Base>
      <Header />
      {children}
    </SC.Base>
  )
}

export default MainLayout