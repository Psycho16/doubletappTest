import styled from "styled-components"
import { viewportWidth, widthBreakpoints } from 'styles/mediaQueryMixins'


export const StudentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
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
export const StudentAvatar = styled.img`
  border: 2px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  border-radius: 300px;
  max-width: 100%;
  min-width: 40px;
  width: 40px;
  height: 40px;
  margin-right: 20px;

`
export const StudentName = styled.h1`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  max-width: 320px;
  width: 100%;
  ${viewportWidth.lowerThan(widthBreakpoints.desktopRegular)} {
    max-width: 220px;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    padding: 0 7px;
    max-width: 100px;
    min-width: 94px;
    /* font-size: 14px; */
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    max-width: 414px;
  }
`
export const SeparatingLine = styled.span`
  display: none;
`
export const StudentSpecialty = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  max-width: 300px;
  width: 100%;
  ${viewportWidth.lowerThan(widthBreakpoints.desktopRegular)} {
    max-width: 213px;
    min-width: 213px;
    padding: 0 5px;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: 173px;
    min-width: 165px;
    /* font-size: 14px; */
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    min-width: 414px;
    padding: 0 10px;
  }
`
export const StudentGroup = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  min-width: 88px;
  max-width: 141px;
  width: 100%;
  /* margin-right: 53px; */
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    /* font-size: 14px; */
    max-width: 87px;
    min-width: 78px;
  }
`
export const StudentAge = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  max-width: 135px;
  width: 100%;
  /* margin-right: 60px; */
  ${viewportWidth.lowerThan(widthBreakpoints.desktopRegular)} {
    max-width: 130px;
    min-width: 126px;
    padding: 0 5px;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: 82px;
    min-width: 78px;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    min-width: 414px;
    padding: 0 10px;
  }
`
export const StudentRatingAndColor = styled.div`
  display: flex;
  margin-right: 20px;
  min-width: 132px;
  width: 132px;
  align-items: center;
  ${viewportWidth.lowerThan(widthBreakpoints.tablet)} {
    max-width: 116px;
    min-width: 110px;
  }

  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    min-width: 414px;
    padding: 0 10px;
  }
`
export const StudentRating = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 80px;
  margin-right: 22px;
`
export const RatingStar = styled.img`
  display: none;
  width: 10px;
  height: 10px;
`
export const ListPoint = styled.img`
  display: none;
  width: 5px;
  height: 5px;
`
export const AgeWord = styled.span`
  display: none;
` 
export const StudentColor = styled.h1`
  box-sizing: border-box;
  border-radius: 300px;
  min-width: 30px;
  width: 30px;
  height: 30px;
`
export const DeleteButton = styled.div`
position: relative;
  min-width: 30px;
  width: 30px;
  height: 30px;
  background: #ffffff;
  box-shadow: 0px 0px 16.3715px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border-radius: 17px;
`
export const DeleteWrapper = styled.div`
    position: absolute;
    top: calc(50% - 7px);
    left: calc(50% - 7px);
    width: 14px;
    height: 14px;
`