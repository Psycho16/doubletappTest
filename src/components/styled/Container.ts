import styled from 'styled-components/macro'
import { viewportWidth, widthBreakpoints } from 'styles/mediaQueryMixins'


export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0px 15px;
  margin: auto;

  ${viewportWidth.lowerThan(widthBreakpoints.desktopRegular)} {
    box-sizing: border-box;
    max-width: 1024px;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    box-sizing: border-box;
    max-width: 768px;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    max-width: 414px;
    padding: 0 10px;
  }
`
