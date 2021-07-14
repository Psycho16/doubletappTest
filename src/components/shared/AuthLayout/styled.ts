import { colors } from '@consts/colors'
import styled from 'styled-components/macro'


export const Base = styled.div`
  max-width: 335px;
  margin: auto;
`

export const Logo = styled.div`
  margin: auto;
  width: 95px;
  height: 95px;
`

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-top: 35px;
  color: ${props => props.theme.palette.text.primary};
`

export const BottomLabel = styled.div`
  margin-top: 40px;
  font-size: 16px;
  color: ${colors.lightGrey};
  text-align: center;
`

export const BottomLabelButton = styled.span`
  color: ${props => props.theme.palette.action.active};
  text-decoration: underline;
  cursor: pointer;
`

export const Error = styled.div`
  color: ${props => props.theme.palette.error.main};
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: -23px;
`