import styled from 'styled-components'


export const PageTitle = styled.h1`
text-align: start;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  margin-bottom: 30px;

`
export const BackToPage = styled.div`
position: relative;
width: max-content;
  height: 20px;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  display: flex;
  align-items: center;
  padding-left: 35px;
  text-transform: uppercase;
  margin-bottom: 30px;
  :hover {
    text-decoration-skip-ink: none;
    text-decoration: underline;
  }
  `
export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 486px;
`