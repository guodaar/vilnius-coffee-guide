import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import { americano, border, latte } from "../../const/styles";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const ReviewCard = ({date, name, stars, comment}) => {
  return <Container>
    <LeftContainer>
      <ReactStars
        count={5}
        size={24}
        edit={false}
        value={stars}
        isHalf={true}
        activeColor={latte}
        color={latte}
        emptyIcon={<BsStar/>}
        halfIcon={<BsStarHalf/>}
        filledIcon={<BsStarFill/>}
      /> 
      <Title>{name}</Title>
      <p>{date}</p> 
    </LeftContainer>
    <RightContainer>
      <p>{comment}</p>
    </RightContainer>
    
  </Container>
}

export default ReviewCard

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
padding: 20px 5vw;
background-color: ${americano};
border: ${border};
`

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Title = styled.h4`
  text-transform: capitalize;
`

const RightContainer = styled.div`
  flex: 2;
`