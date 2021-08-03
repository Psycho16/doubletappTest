import styled from 'styled-components'
import { viewportWidth, widthBreakpoints } from 'styles/mediaQueryMixins'


export const StudentsFieldsContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: start;
  padding-right: 17px;
  margin-bottom: 16px;
  animation-duration: 1s;
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
  ${viewportWidth.lowerThan(widthBreakpoints.desktopRegular)} {
    box-sizing: border-box;
    max-width: 1024px;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: 768px;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    display: none;
    max-width: 414px;
    padding: 0 10px;
  }
`
export const StudentName = styled.h2`
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  margin-left: 80px;
  margin-right: ${props => props.theme.studentsTableSizes.desktopHD.marginW};
  max-width: ${props => props.theme.studentsTableSizes.desktopHD.name};
  width: 100%;
  
  ${viewportWidth.lowerThan(widthBreakpoints.desktopRegular)} {
    max-width: ${props => props.theme.studentsTableSizes.desktopRegular.name}
  }

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: ${props => props.theme.studentsTableSizes.tablet.name};
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    max-width: 414px;
    padding: 0 10px;
  }
`
export const StudentSpecialty = styled.h2`
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  margin-right: ${props => props.theme.studentsTableSizes.desktopHD.marginW};
  max-width: ${props => props.theme.studentsTableSizes.desktopHD.specialty};
  
  ${viewportWidth.lowerThan(widthBreakpoints.desktopRegular)} {
    max-width: ${props => props.theme.studentsTableSizes.desktopRegular.specialty}
  }

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: ${props => props.theme.studentsTableSizes.tablet.specialty};
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    max-width: 414px;
    padding: 0 10px;
  }
`
export const StudentGroup = styled.h2`
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  margin-right: ${props => props.theme.studentsTableSizes.desktopHD.marginW};
  max-width: ${props => props.theme.studentsTableSizes.desktopHD.group};
  width: 100%;
  
  ${viewportWidth.lowerThan(widthBreakpoints.desktopRegular)} {
    max-width: ${props => props.theme.studentsTableSizes.desktopRegular.group}
  }

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: ${props => props.theme.studentsTableSizes.tablet.group};
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    max-width: 414px;
    padding: 0 10px;
  }
`
export const StudentAge = styled.h2`
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  margin-right: ${props => props.theme.studentsTableSizes.desktopHD.marginW};
  max-width: ${props => props.theme.studentsTableSizes.desktopHD.age};
  width: 100%;
  
  ${viewportWidth.lowerThan(widthBreakpoints.desktopRegular)} {
    max-width: ${props => props.theme.studentsTableSizes.desktopRegular.age};
  }
  
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: ${props => props.theme.studentsTableSizes.tablet.age};
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    max-width: 414px;
    padding: 0 10px;
  }
`
export const StudentRating = styled.h2`
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  max-width: ${props => props.theme.studentsTableSizes.desktopHD.rating};
  width: 100%;
`
