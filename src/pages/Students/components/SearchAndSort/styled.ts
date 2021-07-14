import styled from 'styled-components'
import { viewportWidth, widthBreakpoints } from 'styles/mediaQueryMixins'


export const SearchAndSortContainer = styled.div`
    width: 100%;
    max-width: 1180px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: start;
    margin-bottom: 36px;
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