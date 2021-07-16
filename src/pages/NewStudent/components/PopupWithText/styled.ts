import styled from "styled-components"
import { viewportWidth, widthBreakpoints } from "styles/mediaQueryMixins"


export const PopupWithTexttWrapper = styled.div`
 max-width: 380px;
  width: 100%;
  height: 76px;
  margin-bottom: 20px;
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: 280px;
  }
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    max-width: 335px;
  }
`
export const PopupWrapper = styled.div`
  height: 48px;
  position: relative;
`

export const PopupTitle = styled.h2`
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 8px;
`