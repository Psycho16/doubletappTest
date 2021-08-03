import styled from "styled-components"


type PopupProps = {
  type?: string
}
export const Base = styled.div<PopupProps>`
  width: 100%;
  height: 100%;
  animation-duration: ${props => props.type === "sort" ? "0.55s" : ""};
  animation-fill-mode: ${props => props.type === "sort" ? "both" : ""};
  animation-name: ${props => props.type === "sort" ? "fadeInRight" : ""};; 
  @keyframes fadeInRight { 
    0% {                
        transform: translateX( 50px);
    }
    100% {
        transform: none;
    }
  }
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
  box-sizing: border-box;
  text-align: start;
  height: 100%;
  padding: 0 15px 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PopupSpan = styled.span`
  font-size: 12px;
  line-height: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 70%;
  font-weight: 500;
`
export const Icon = styled.div`
  max-width: 16px;
  height: 16px;
  svg {
    width: 100%;
    height: 100%;
  }
`
export const IconActive = styled.div`
  top: 13px;
  right: 13px;
  position: absolute;
  max-width: 10px;
  height: 10px;
  svg {
    width: 100%;
    height: 100%;
  }
`
export const Popup = styled.div`
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgb(0 0 0 / 9%);
  border-radius: 10px;
  width: 100%;
  text-align: start;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 6px;  
  animation-duration: .6s;
  animation-fill-mode: both; 
  animation-name: fadeInDown; 
  @keyframes fadeInDown { 
      0% {                
          opacity: 0;
          transform: translate3d(0px, -50px, 0px);
      }
      100% {
          opacity: 1;
          transform: none;
      }
  }
  z-index: 1;
`
export const PopupUl = styled.ul`
  overflow: hidden;
  font-size: 12px;
  line-height: 15px;
  margin: 0;
  padding: 0;
`
export const PopupLi = styled.div`
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
    background: ${props => props.theme.palette.action.hover};
    border-radius: 5px;
  }
`
export const PopupLiActive = styled.div` 
  position: relative;
  background: rgba(73, 194, 232, 0.11);
  border-radius: 5px;
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
`
