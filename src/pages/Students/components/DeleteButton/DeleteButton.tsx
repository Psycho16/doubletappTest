import React, { FC } from 'react'

import * as SC from './styled'


export interface DeleteButtonProps {
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  onClick: (event: React.SyntheticEvent<HTMLElement>) => void;
  disabled?: boolean;
}



const DeleteButton: FC<DeleteButtonProps> = (props) => {
  const {
    icon,
    onClick,
    disabled
  } = props
  
  return (
    <SC.Base
    onClick={event => !disabled && onClick(event)}
    disabled={disabled}
    >
    {icon &&  <SC.DeleteWrapper>{React.createElement(icon)}</SC.DeleteWrapper>}
      
    </SC.Base>
  )
}

export default DeleteButton