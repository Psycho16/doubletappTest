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
    justify-content: space-between;
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
  }
`
export const SearchIconWrapper = styled.div`
margin: 0;
position: absolute;
top: calc(50% - 9px);
left: 10px;
`
export const InputWrapper = styled.div`
  width: 80%;
  position: relative;
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    width: 100%;
  }
`
export const PopupWrapper = styled.div`
  width: 17%;
  height: 48px;
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    display: none;
  }
`