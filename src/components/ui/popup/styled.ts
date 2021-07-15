import styled from "styled-components"


export const Base = styled.div`
  width: 100%;
  height: 100%;
`
export const PopupWrapper = styled.div`
  position: relative;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  width: 100%;
  height: 100%;
  align-items: center;
  cursor: pointer;
`
export const PopupLabel = styled.div`
  width: 100%;
  text-align: start;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`
export const PopupSpan = styled.span`
    padding-left: 20px;
    font-size: 12px;
    line-height: 15px;
`
export const Icon = styled.img`
  margin-right: 10px;
  position: absolute;
  right: 15px;
  width: 20px;
  height: 20px;
`
export const Popup = styled.div`
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgb(0 0 0 / 9%);
  border-radius: 10px;
  width: 100%;
  text-align: start;
  padding-top: 5px;
  margin-top: 6px;
  z-index: 1;
`
export const PopupUl = styled.ul`
  overflow: hidden;
  font-size: 12px;
  line-height: 15px;
  padding: 0;
`
export const PopupLi = styled.li`
  box-sizing: border-box;
  width: 96%;
  height: 35px;
  margin: 0 auto;
  margin-bottom: 4px;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 12px;
  line-height: 15px;
  list-style-type: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  :active,
  :hover {
    background: rgba(73, 194, 232, 0.5);
    border-radius: 5px;
  }
`