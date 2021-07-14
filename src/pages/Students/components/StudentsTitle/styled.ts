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
`
export const StudentsTitle = styled.h1`
  color: ${defaultTheme.palette.text.primary};
  text-align: start;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
`
export const ButtonWrapper = styled.div`
  width: 26%;
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: 30%;
  }
`