import styled from 'styled-components'
import { viewportWidth, widthBreakpoints } from 'styles/mediaQueryMixins'


export const StudentsWrapper = styled.div`
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  padding: 26px 16px 20px 19px;
  box-sizing: border-box;
  animation-duration: 1s;
  animation-fill-mode: both; 
  animation-name: fadeInDown; 
  @keyframes fadeInDown { 
    0% {                
        opacity: 0;
        transform: translate3d(0px, -50px, 0px);
    }
    100% {
        opacity: 1;
        transform: none;
    }
  }
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    padding: 0;
    animation: none;
  }
`