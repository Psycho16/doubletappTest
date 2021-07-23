import styled from 'styled-components'
import { viewportWidth, widthBreakpoints } from 'styles/mediaQueryMixins'


export const StudentsWrapper = styled.div`
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  padding: 26px 16px 0 19px;
  box-sizing: border-box;
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    padding: 0;
  }
`