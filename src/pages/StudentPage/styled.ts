import { Link } from "react-router-dom"
import styled from "styled-components"
import { viewportWidth, widthBreakpoints } from 'styles/mediaQueryMixins'


export const StudentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    /* padding: 0;
    flex-direction: column;
    align-items: flex-start; */
  }
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    padding: 0;
    flex-direction: column;
    align-items: center;
  }
`
export const PageTitle = styled.h1`
  text-align: start;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  margin-bottom: 28px;
  animation-duration: 0.55s;
  animation-fill-mode: both; 
  animation-name: fadeInLeft;
  @keyframes fadeInLeft { 
    0% {                
        opacity: 0;
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        transform: none;
    }
  } 
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    text-align: center;
  }
`
export const BackToPage = styled(Link)`
  position: relative;
  width: max-content;
  text-decoration: none;
  height: 20px;
  font-size: 12px;
  line-height: 15px;
  color: ${props => props.theme.palette.text.primary};;
  display: flex;
  align-items: center;
  padding-left: 35px;
  text-transform: uppercase;
  margin-bottom: 60px;
  margin-top: 25px;
  animation-duration: 0.55s;
  animation-fill-mode: both; 
  animation-name: fadeInLeft;
  @keyframes fadeInLeft { 
    0% {                
        opacity: 0;
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        transform: none;
    }
  } 
  :hover {
    text-decoration-skip-ink: none;
    text-decoration: underline;
  }
  :focus {
    outline: none;
    border: none;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    margin-bottom: 18px;
    margin-top: 31px;
  }
`
export const ArrowIconWrapper = styled.div`
  position: absolute;
  left: 0;
  height: 16px;
`
export const LabelCircle = styled.div`
  width: 280px;
  height: 280px;
  background: #ffffff;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
    animation-duration: 0.55s;
  animation-fill-mode: both; 
  animation-name: fadeInLeft;
  @keyframes fadeInLeft { 
    0% {                
        opacity: 0;
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        transform: none;
    }
  } 
  /* ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    width: 150px;
    height: 150px;
  } */
`
export const LoadedImage = styled.img`
  width: 80px;
  height: 80px;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 50%;
`
export const LabelCircleText = styled.p`
  font-weight: 600;
  font-size: 50px;
  color: ${props => props.theme.palette.action.active};
  margin: 0;
`
export const StudentAvatar = styled.img`
   width: 280px;
  height: 280px;
  background: #ffffff;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
    animation-duration: 0.55s;
  animation-fill-mode: both; 
  animation-name: fadeInLeft;
  @keyframes fadeInLeft { 
    0% {                
        opacity: 0;
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        transform: none;
    }
  } 
  /* ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    width: 220px;
    height: 220px;
  } */
`

export const StudentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 280px;
  width: 57%;
  animation-duration: 0.55s;
  animation-fill-mode: both; 
  animation-name: fadeInRight; 
  @keyframes fadeInRight { 
      0% {                
          opacity: 0;
          transform: translateX( 50px);
      }
      100% {
          opacity: 1;
          transform: none;
      }
  }
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    /* align-items: center; */
    height: 220px;
    width: auto;
  }
`
export const StudentName = styled.h2`
  font-size: 35px;
  margin: 0;
  font-weight: bold;
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    font-size: 25px;
  }
`
export const StudentSubInfo = styled.h3`
  font-weight: normal;
  font-size: 18px;
  margin: 0;
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    font-size: 15px;
  }
`
export const FavouriteColor = styled.div`
  display: flex;
  align-items: center;
`
export const ColorBox = styled.div`
    display: inline-block;
    height: 20px;
    width: 50px;
    margin-left: 28px;
`