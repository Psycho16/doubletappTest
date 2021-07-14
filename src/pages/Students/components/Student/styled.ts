import styled from "styled-components"


export const StudenWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const StudentAvatar = styled.img`
  border: 2px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  border-radius: 300px;
  min-width: 40px;
  width: 40px;
  height: 40px;
  margin-right: 20px;
`
export const StudentName = styled.h1`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  min-width: 300px;
  width: 300px;
  margin-right: 20px;
`
export const SeparatingLine = styled.span`
  display: none;
`
export const StudentSpecialty = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  min-width: 280px;
  width: 280px;
  margin-right: 20px;
`
export const StudentGroup = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  min-width: 88px;
  width: 88px;
  margin-right: 53px;
`
export const StudentAge = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  min-width: 80px;
  width: 80px;
  margin-right: 60px;
`
export const StudentRatingAndColor = styled.div`
  display: flex;
  margin-right: 20px;
  min-width: 132px;
  width: 132px;
  align-items: center;
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
  min-width: 30px;
  width: 30px;
  height: 30px;
  background: #ffffff;
  box-shadow: 0px 0px 16.3715px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background-image: url('./group.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 14px;
  border-radius: 17px;
`