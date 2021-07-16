import styled from "styled-components"
import {viewportWidth,widthBreakpoints} from 'styles/mediaQueryMixins'


export const Base = styled.div`
  width: 100%;
  height: 100%;
`
export const ColorsPopupWrapper = styled.div`
  position: relative;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  width: 100%;
  height: 100%;
  align-items: center;
  cursor: pointer;
`
export const ColorsPopupLabel = styled.div`
  width: 100%;
  box-sizing: border-box;
  text-align: start;
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ColorsPopupSpan = styled.span`
    font-size: 16px;
    line-height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 70%;
    opacity: 0.3;
`
export const Icon = styled.div`
  max-width: 16px;
  height: 16px;
  svg {
    width: 100%;
    height: 100%;
  }
`
export const ColorsPopup = styled.div`
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgb(0 0 0 / 9%);
  border-radius: 10px;
  width: 100%;
  text-align: start;
  padding-top: 2px;
  margin-top: 6px;
  z-index: 1;
`
export const ColorsPopupUl = styled.ul`
  overflow: hidden;
  font-size: 12px;
  line-height: 15px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const StudentColor = styled.h3`
  box-sizing: border-box;
  border-radius: 300px;
  min-width: 30px;
  width: 30px;
  height: 30px;
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    min-width: 12px;
    width: 12px;
    height: 12px;
    margin: 0;
  }
`