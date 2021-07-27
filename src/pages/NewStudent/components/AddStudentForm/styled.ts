import styled from "styled-components"
import { viewportWidth, widthBreakpoints } from "styles/mediaQueryMixins"


export const FormWrapper = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: 150px;
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    height: max-content;
  }
`
export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 480px;
  width: 100%;
  max-width: 960px;
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    height: max-content;
  }
`
export const InputWrapper = styled.div`
  max-width: 380px;
  width: 100%;
  height: 76px;
  margin-bottom: 20px;
  outline: none;
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: 280px;
  }
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    max-width: 335px;
  }
`
export const AvatarInputWrapper = styled.div`
  display: block;
  margin-bottom: 30px;
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: 280px;
  }
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    max-width: 335px;
  }
`
export const AvatarLabel = styled.label`
  cursor: pointer;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 230px;
`
export const LabelCircle = styled.div`
  width: 80px;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 50%;
  position: relative;
`
export const LoadedImage = styled.img`
  width: 80px;
  height: 80px;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 50%;
`
export const DeleteAvatarButton = styled.button`
  position: absolute;
  top: 0;
  left: 61px;
  width: 100%;
  height: 15px;
  opacity: 0.5;
  max-width: 15px;
  border-radius: 50%;
`
export const LabelCircleText = styled.p`
  font-weight: 600;
  font-size: 28px;
  color: ${props => props.theme.palette.action.active};
  position: absolute;
  top: 23px;
  left: 17px;
  margin: 0;
`
export const LabelText = styled.div`
  width: 130px;
  height: 80px;
  padding-top: 40px;
`
export const LabelTextTitle = styled.h3`
  height: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  margin: 0;
  margin-bottom: 8px;
  :hover {
    text-decoration-line: underline;
  }
`
export const LabelTextSubtitle = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  margin: 0;
  line-height: 15px;
`
export const AvatarInput = styled.input`
  display: none;
`

export const InputTitle = styled.h3`
  font-size: 15px;
  line-height: 20px;
  margin: 0;
  margin-bottom: 8px;
`
export const CustomInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 49px;
  box-shadow: 0px 7px 64px rgb(0 0 0 / 7%);
  border-radius: 6px;
  border: none;
  padding-left: 20px;
  outline: none;
  ::placeholder {
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: rgba(0,0,0,0.3)
  }
`

export const ButtonWrapper = styled.div`
  max-width: 380px;
  width: 100%;
  margin-top: 20px;
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: 280px;
  }
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    max-width: 335px;
    order: 1;
  }
`
export const CustomSelect = styled.select`
  position: relative;
  width: 100%;
  height: 49px;
  box-shadow: 0px 7px 64px rgb(0 0 0 / 7%);
  border-radius: 6px;
  border: none;
  padding-right: 30px;
  padding-left: 20px;
  outline: none;
`
export const ErrorMessage = styled.p`
  color: ${props => props.theme.palette.error.main};;
  margin: 0;
  font-size: 14px;
`