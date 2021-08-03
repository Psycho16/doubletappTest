import styled from "styled-components"
import { viewportWidth, widthBreakpoints } from 'styles/mediaQueryMixins'


export const StudentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  margin-bottom: 25px;
  :last-child {
    margin-bottom: 0;
  }

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
    padding: 16px;
    position: relative;
    width: 100%;
    height: 170px;
    flex-wrap: wrap;
    margin-bottom: 10px;
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
    border-radius: 6px;
    align-content: flex-start;
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
    :last-child {
    margin-bottom: 20px;
    }
  }
`
export const StudentAvatar = styled.img`
  box-sizing: border-box;
  border-radius: 300px;
  max-width: 100%;
  min-width: 40px;
  width: 40px;
  height: 40px;
  margin-right: ${props => props.theme.studentsTableSizes.desktopHD.marginW};
  
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    align-self: flex-start;
  }
`
export const AvatarWrapper = styled.div`
  position: relative;
  max-height: 40px;
`
export const StudentAvatarBorder = styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  max-width: 100%;
  width: 34px;
  height: 34px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 0px 0px 0px 3px rgba(230, 230, 230, 0.4),5px 5px 15px 3px rgba(0,0,0,0);
`
export const EmptyStudentAvatar = styled.div`
  box-sizing: border-box;
  position: relative;
  border-radius: 300px;
  max-width: 100%;
  min-width: 40px;
  width: 40px;
  height: 40px;
  margin-right: ${props => props.theme.studentsTableSizes.desktopHD.marginW};
  background: #ffffff;
  box-shadow: 0px 0px 0px 3px  rgba(230, 230, 230, 0.3);
  /* box-shadow: 0px 0px 0px 3px rgba(130, 130, 130, 0.1),5px 5px 15px 3px rgba(0,0,0,0); */
  
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    align-self: flex-start;
  }
`
export const EmptyStudentAvatarText = styled.p`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 5px;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 25px;
  text-transform: uppercase;
  color: ${props => props.theme.palette.action.active};
`
export const StudentName = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: ${props => props.theme.studentsTableSizes.desktopHD.marginW};
  max-width: ${props => props.theme.studentsTableSizes.desktopHD.name};
  width: 100%;

  ${viewportWidth.lowerThan(widthBreakpoints.desktopRegular)} {
    max-width: ${props => props.theme.studentsTableSizes.desktopRegular.name};
  }

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: ${props => props.theme.studentsTableSizes.tablet.name};
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    font-size: 15px;
    height: 20px;
    max-width: ${props => props.theme.studentsTableSizes.mobile.name};
    line-height: 20px;
    align-self: flex-start;
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
export const SeparatingLine = styled.span`
  display: none;

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    width: 100%;
    opacity: 0.05;
    margin-top: 14px;
    border: 1px solid #000000;
    display: inline-block;
    margin-bottom: 15px;
  }
`
export const StudentSpecialty = styled.h2`
  cursor: default;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: ${props => props.theme.studentsTableSizes.desktopHD.marginW};
  max-width: ${props => props.theme.studentsTableSizes.desktopHD.specialty};
  width: 100%;

  ${viewportWidth.lowerThan(widthBreakpoints.desktopRegular)} {
    max-width: ${props => props.theme.studentsTableSizes.desktopRegular.specialty};
  }

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: ${props => props.theme.studentsTableSizes.tablet.specialty};
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    display: flex;
    align-items: center;
    order: 4;
    margin: 0;
    margin-left: ${props => props.theme.studentsTableSizes.mobile.marginW};
    margin-bottom: 5px;
    padding:0;
    max-width: ${props => props.theme.studentsTableSizes.mobile.specialty};
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    height: 20px;
  }
`
export const StudentGroup = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  margin-right: ${props => props.theme.studentsTableSizes.desktopHD.marginW};
  max-width: ${props => props.theme.studentsTableSizes.desktopHD.group};
  width: 100%;

  ${viewportWidth.lowerThan(widthBreakpoints.desktopRegular)} {
    max-width: ${props => props.theme.studentsTableSizes.desktopRegular.group};
  }
  
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: ${props => props.theme.studentsTableSizes.tablet.group};
    /* min-width: 78px; */
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    display: flex;
    align-items: center;
    order: 4;
    margin: 0;
    margin-left: ${props => props.theme.studentsTableSizes.mobile.marginW};
    margin-bottom: 5px;
    padding:0;
    max-width: ${props => props.theme.studentsTableSizes.mobile.group};
    width: 100%;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    height: 20px;
  }
`
export const StudentAge = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  margin-right: ${props => props.theme.studentsTableSizes.desktopHD.marginW};
  max-width: ${props => props.theme.studentsTableSizes.desktopHD.age};
  width: 100%;
  
  ${viewportWidth.lowerThan(widthBreakpoints.desktopRegular)} {
    max-width: ${props => props.theme.studentsTableSizes.desktopRegular.age};
  }
  
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: ${props => props.theme.studentsTableSizes.tablet.age};
    /* min-width: 78px; */
  }
  
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    display: flex;
    align-items: center;
    order: 4;
    margin: 0;
    margin-left: ${props => props.theme.studentsTableSizes.mobile.marginW};
    padding:0;
    max-width: ${props => props.theme.studentsTableSizes.tablet.age};
    width: 100%;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    height: 20px;
  }
`
export const StudentRatingAndColor = styled.div`
  display: flex;
  margin-right: 20px;
  /* min-width: 132px; */
  width: 100%;
  max-width: 132px;
  align-items: center;
  
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: 98px;
    /* min-width: 110px; */
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    align-items: center;
    position: absolute;
    max-width: 60px;
    min-width: 0;
    justify-content: space-between;
    top: 39px;
    left: 77px;
  }
`
export const StudentRating = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  max-width: ${props => props.theme.studentsTableSizes.desktopHD.rating};
  width: 100%;
  margin-right: ${props => props.theme.studentsTableSizes.desktopHD.marginW};

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: ${props => props.theme.studentsTableSizes.tablet.rating};
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    display: flex;
    order: 3;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    line-height: 15px;
    height: 11px;
    max-width: 35px;
    margin: 0;
  }
`

export const RatingStar = styled.div`
  display: none;
  max-width: 10px;
  width: 100%;
  
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    display: flex;
    margin-right: 10px;
  }
`
export const ListPoint = styled.div`
  display: none;
  width: 5px;
  min-width: 5px;
  height: 5px;
  
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    display: inline-block;
    margin-right: 13px;
    background-color: ${props => props.theme.palette.action.active};
    border-radius: 50%;
  }
`
export const AgeWord = styled.span`
  display: none;
  
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    display: inline-block;
    font-size: 12px;
    line-height: 15px;
    margin-left: 5px;
  }
` 
export const StudentColor = styled.h2`
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
export const DeleteButton = styled.button`
  position: relative;
  min-width: 30px;
  width: 30px;
  height: 30px;
  background: #ffffff;
  box-shadow: 0px 0px 16.3715px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border-radius: 17px;
  border: none;
  outline: none;
  
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    position: absolute;
    right: 18px;
    top: 16px; 
  }
`
export const DeleteButtonDisabled = styled.button`
  position: relative;
  min-width: 30px;
  width: 30px;
  height: 30px;
  background: #ffffff;
  opacity: .5;
  box-shadow: 0px 0px 16.3715px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border-radius: 17px;
  border: none;
  outline: none;
  
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    position: absolute;
    right: 18px;
    top: 16px; 
  }
`
export const DeleteWrapper = styled.div`
  position: absolute;
  top: calc(50% - 7px);
  left: calc(50% - 7px);
  width: 14px;
  height: 14px;
`