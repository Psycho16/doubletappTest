import styled from 'styled-components'
import { defaultTheme } from '@consts/appTheme'
import { viewportWidth, widthBreakpoints } from 'styles/mediaQueryMixins'
import { Link } from 'react-router-dom'


export const StudentsTitleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 39px;
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    flex-direction: column;
    margin-bottom: 10px;
  }
`
export const StudentsTitle = styled.h1`
  color: ${defaultTheme.palette.text.primary};
  text-align: start;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  margin: 0;
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    width: 100%;
    margin: 39px 0 22px 0;
  }
`
export const ButtonWrapper = styled(Link)`
  width: 30%;
  position: relative;
  text-decoration: none;
  :focus {
    outline: none;
    border: none;
  }
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
