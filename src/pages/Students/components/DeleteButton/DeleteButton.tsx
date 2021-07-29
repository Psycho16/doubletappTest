import React, { FC, SyntheticEvent, useState } from 'react'

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

  const [isLoading, setIsLoading] = useState(disabled)

  const onDeleteClick = (event: SyntheticEvent<HTMLElement, Event>) => {
    if (!disabled) {
      setIsLoading(true)
      onClick(event)
    }

  }
  
  return (
    <SC.Base
    onClick={onDeleteClick}
    disabled={isLoading}
    >
    {icon &&  <SC.DeleteWrapper>{React.createElement(icon)}</SC.DeleteWrapper>}
      
    </SC.Base>
  )
}

export default DeleteButton