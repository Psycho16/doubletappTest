import styled from 'styled-components'
import { viewportWidth, widthBreakpoints } from 'styles/mediaQueryMixins'


export const StudentWrapper = styled.div`
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  padding-left: 19px;
  padding-right: 17px;
  box-sizing: border-box;
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    padding: 0;
  }
`