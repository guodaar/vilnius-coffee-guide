import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import { americano, border, latte } from "../../const/styles";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const ReviewCard = ({name, stars, comment}) => {
  return <Container>
    <LeftContainer>
      <h4>{name}</h4>
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

  h4 {
    text-transform: capitalize;
    margin-bottom: 12px;
  }
`

const RightContainer = styled.div`
  flex: 2;
`