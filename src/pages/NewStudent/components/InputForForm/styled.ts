import styled from "styled-components"


export const Base = styled.div`
  width: 100%;
  height: 49px;
`
export const Title = styled.h2`
  font-size: 15px;
  line-height: 20px;
  margin: 0;
  margin-bottom: 8px;
`

export const ErrorMessage = styled.p`
  color: ${props => props.theme.palette.error.main};
  margin: 0;
  font-size: 14px;
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