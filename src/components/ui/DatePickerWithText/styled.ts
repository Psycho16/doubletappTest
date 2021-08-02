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