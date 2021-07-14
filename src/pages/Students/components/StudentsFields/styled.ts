import styled from 'styled-components'
import { viewportWidth, widthBreakpoints } from 'styles/mediaQueryMixins'


export const StudentsFieldsContainer = styled.div`
    width: 100%;
    max-width: 1180px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: start;
    padding-right: 17px;
    margin-bottom: 12px;
    ${viewportWidth.lowerThan(widthBreakpoints.desktopRegular)} {
    box-sizing: border-box;
    max-width: 1024px;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    box-sizing: border-box;
    max-width: 768px;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    display: none;
    max-width: 414px;
    padding: 0 10px;
  }
`
export const StudentName = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-left: 80px;
  /* margin-right: 220px; */
  max-width: 320px;
  width: 100%;
  ${viewportWidth.lowerThan(widthBreakpoints.desktopRegular)} {
    max-width: 220px;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: 115px;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    max-width: 414px;
    padding: 0 10px;
  }
`
export const StudentSpecialty = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  max-width: 297px;
  ${viewportWidth.lowerThan(widthBreakpoints.desktopRegular)} {
    max-width: 220px;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: 180px;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    max-width: 414px;
    padding: 0 10px;
  }
`
export const StudentGroup = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 143px;
`
export const StudentAge = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 140px;
`
export const StudentRating = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 6.8%;
`
