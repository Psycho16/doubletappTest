import styled from 'styled-components/macro'
import { defaultTheme } from '@consts/appTheme'


export const Message = styled.span`
  display: block;
  margin: 0 0 60px 0;

  text-align: center;
  font-size: 32px;
  color: ${defaultTheme.palette.action.active};
`

export const ButtonWrapper = styled.div`
  width: 30%;
  margin: auto;
`