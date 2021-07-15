import styled from 'styled-components'
import { defaultTheme } from '@consts/appTheme'
import { viewportWidth, widthBreakpoints } from 'styles/mediaQueryMixins'


export const StudentsTitleContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 39px;
    ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    flex-direction: column;
  }
`
export const StudentsTitle = styled.h1`
  color: ${defaultTheme.palette.text.primary};
  text-align: start;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    width: 100%;
  }
`
export const ButtonWrapper = styled.div`
  width: 30%;
  position: relative;
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: 30%;
  }
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    width: 100%;
    max-width: 100%;
  }
`
export const PlusWrapper = styled.div`
  position: absolute;
  top: calc(50% - 8px);
  left: 9%;
`
