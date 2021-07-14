import styled from 'styled-components/macro'

import { Container } from '@components/styled/Container'


export const Base = styled.div`
  box-shadow: ${props => props.theme.boxShadow.common};
  padding: 16px 0;

  ${Container} {
    display: flex;
    align-items: center;
  }
`

export const Logo = styled.div`
  margin-right: 40px;
  width: 48px;
  height: 48px;

  svg {
    max-width: 100%;
    max-height: 100%;
  }
`

export const Title = styled.div`
  font-family: 'geometria';
  font-weight: 500;
  font-size: 20px;
  line-height: 44px;
  color: ${props => props.theme.palette.text.primary};
`

export const TitleAccent = styled.span`
  color: ${props => props.theme.palette.action.active};
`