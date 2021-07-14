import styled, { css } from 'styled-components/macro'


type BaseProps = {
  disabled?: boolean;
}

export const Base = styled.button<BaseProps>`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: ${props => props.theme.palette.action.active};
  border-radius: ${props => props.theme.borderRadius}px;
  font-size: 18px;
  height: 50px;
  padding: 5px 15px;
  cursor: pointer;
  justify-content: center;
  font-weight: 700;
  color: ${props => props.theme.palette.action.contrastText.default};
  transition: background-color .2s linear;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  border: none;

  ${props => props.disabled && css`
    background-color: ${props => props.theme.palette.action.disabled};
    color: ${props => props.theme.palette.action.contrastText.disabled};
  `}

  ${props => !props.disabled && css`
    &:hover {
      background-color: ${props => props.theme.palette.action.hover}
    }
  `}
`

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  
  svg {
    width: 100%;
    height: 100%;
  }
`