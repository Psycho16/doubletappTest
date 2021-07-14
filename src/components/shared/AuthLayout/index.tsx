import React, { FC } from 'react'

import { ReactComponent as LogoIcon } from '@assets/icons/logo.svg'

import * as SC from './styled'


type Props = {
  title: string;
  onLabelButtonClick: () => void;
  bottomLabelText: string;
  labelButtonText: string;
  error?: string;
}

const AuthLayout: FC<Props> = (props) => {
  const { title, children, onLabelButtonClick, bottomLabelText, labelButtonText, error } = props

  return (
    <SC.Base>
      <SC.Logo>
        <LogoIcon width="100%" height="100%" />
      </SC.Logo>
      <SC.Title>
        {title}
      </SC.Title>

      {children}

      {error && (
        <SC.Error>
          {error}
        </SC.Error>
      )}

      <SC.BottomLabel>
        {`${bottomLabelText} `}
        <SC.BottomLabelButton onClick={onLabelButtonClick}>
          {labelButtonText}
        </SC.BottomLabelButton>
      </SC.BottomLabel>
    </SC.Base>
  )
}

export default AuthLayout