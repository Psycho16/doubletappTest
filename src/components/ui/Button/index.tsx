import React, { FC } from 'react'

import * as SC from './styled'


export interface ButtonProps {
  text: string
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  onClick: (event: React.SyntheticEvent<HTMLElement>) => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const { text, icon, onClick, disabled } = props

  return (
    <SC.Base 
      onClick={event => !disabled && onClick(event)} 
      disabled={disabled}
    >
      {icon && <SC.Icon>{React.createElement(icon)}</SC.Icon>}
      {text}
    </SC.Base>
  )
}

export default Button
