import styled, {css} from "styled-components"
import { viewportWidth, widthBreakpoints } from "styles/mediaQueryMixins"


type DeleteButtonProps ={
  disabled?: boolean;
}

export const Base = styled.button<DeleteButtonProps>`
  position: relative;
  min-width: 30px;
  width: 30px;
  height: 30px;
  background: #ffffff;
  box-shadow: 0px 0px 16.3715px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border-radius: 17px;
  border: none;
  outline: none;
  ${props => props.disabled && css`
    opacity: 0.4;
  `}
  ${props => !props.disabled && css`
    opacity: 1;
  `}
  
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    position: absolute;
    right: 18px;
    top: 16px; 
  }
`
export const DeleteWrapper = styled.div`
  position: absolute;
  top: calc(50% - 7px);
  left: calc(50% - 7px);
  width: 14px;
  height: 14px;
  svg {
    width: 100%;
    height: 100%;
  }
`