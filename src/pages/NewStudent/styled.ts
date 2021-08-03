import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { viewportWidth, widthBreakpoints } from "styles/mediaQueryMixins"


export const PageTitle = styled.h1`
  text-align: start;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  margin-bottom: 28px;
  animation-duration: 0.55s;
  animation-fill-mode: both; 
  animation-name: fadeInLeft;
  @keyframes fadeInLeft { 
    0% {                
        opacity: 0;
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        transform: none;
    }
  } 
`
export const BackToPage = styled(Link)`
  position: relative;
  width: max-content;
  text-decoration: none;
  height: 20px;
  font-size: 12px;
  line-height: 15px;
  color: ${props => props.theme.palette.text.primary};;
  display: flex;
  align-items: center;
  padding-left: 35px;
  text-transform: uppercase;
  margin-bottom: 33px;
  margin-top: 25px;
  animation-duration: 0.55s;
  animation-fill-mode: both; 
  animation-name: fadeInLeft;
  @keyframes fadeInLeft { 
    0% {                
        opacity: 0;
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        transform: none;
    }
  } 
  :hover {
    text-decoration-skip-ink: none;
    text-decoration: underline;
  }
  :focus {
    outline: none;
    border: none;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    margin-bottom: 18px;
    margin-top: 31px;
  }
`
export const ArrowIconWrapper = styled.div`
  position: absolute;
  left: 0;
  height: 16px;
`
export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 486px;
  /* margin-bottom: 41px; */
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    height: max-content;
  }
`
export const ButtonWrapper = styled.div`
  max-width: 380px;
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: 280px;
  }
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    max-width: 335px;
  }
`