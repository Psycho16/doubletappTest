import styled, { css } from 'styled-components/macro'
import {viewportWidth, widthBreakpoints} from 'styles/mediaQueryMixins'


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
      transition: all .3s;
      background-color: ${props => props.theme.palette.action.hover}
    }
  `}
`

export const Icon = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 16px;
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    display: none;
    margin-right: 1px;
  }
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    margin-right: 20px;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`