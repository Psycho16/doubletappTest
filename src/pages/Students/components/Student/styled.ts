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
    /* display: none; */
    max-width: 414px;
    padding: 16px;
    position: relative;
    min-width: 100%;
    width: 100%;
    height: 170px;
    flex-wrap: wrap;
    margin-bottom: 10px;
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
    border-radius: 6px;
    /* padding: 0; */
    align-content: flex-start;
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
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    align-self: flex-start;
  }
`
export const EmptyStudentAvatar = styled.div`
 border: 2px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  position: relative;
  border-radius: 300px;
  max-width: 100%;
  min-width: 40px;
  width: 40px;
  height: 40px;
  margin-right: 20px;
  background: #ffffff;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    align-self: flex-start;
  }
`
export const EmptyStudentAvatarText = styled.p`
      display: flex;
    justify-content: center;
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 25px;
    color: #49C2E8;
  color: ${props => props.theme.palette.action.active};
`

export const StudentDivAvatar = styled.div`
    /* border: 2px solid rgba(255, 255, 255, 0.6); */
    box-sizing: border-box;
  border-radius: 300px;
  background-position: center center;
    background-size: contain;
  background-repeat: no-repeat;
  max-width: 100%;
  min-width: 40px;
  width: 40px;
  height: 40px;
  margin-right: 20px;
  &:before{
    content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  }
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    /* margin-right: 0; */
    align-self: flex-start;
  }
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
    font-size: 15px;
    height: 20px;
    max-width: 200px;
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
  max-width: 300px;
  width: 100%;
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    display: flex;
    align-items: center;
    order: 4;
    margin: 0;
    margin-left: 77px;
    margin-bottom: 5px;
    padding:0;
    min-width: 200px;
    width: 100%;
    font-size: 12px;
    line-height: 15px;
    height: 20px;
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
  ${viewportWidth.lowerThan(widthBreakpoints.mobile)} {
    display: flex;
    align-items: center;
    order: 4;
    margin: 0;
    margin-left: 77px;
    margin-bottom: 5px;
    padding:0;
    min-width: 200px;
    width: 100%;
    font-size: 12px;
    line-height: 15px;
    height: 20px;
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
    display: flex;
    align-items: center;
    order: 4;
    margin: 0;
    margin-left: 77px;
    padding:0;
    min-width: 200px;
    width: 100%;
    font-size: 12px;
    line-height: 15px;
    height: 20px;
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
  width: 80px;
  margin-right: 22px;
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
    background-color: #49C2E8;
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
export const DeleteButton = styled.div`
position: relative;
  min-width: 30px;
  width: 30px;
  height: 30px;
  background: #ffffff;
  box-shadow: 0px 0px 16.3715px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border-radius: 17px;
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