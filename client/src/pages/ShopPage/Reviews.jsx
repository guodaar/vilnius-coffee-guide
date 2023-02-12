import styled from "styled-components";
import { latte, mainDisplayFont } from "../../const/styles";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import Button from "../../components/Button/Button";
import { useContext } from "react";
import { ReviewsContext } from '../../contexts/ReviewsContext';

const Reviews = ({shopId}) => {
  const {reviews} = useContext(ReviewsContext);
  console.log(reviews);
  
  return (
    <Container>
      <TopWrapper>
        <h2>Customer reviews</h2>
        <Button>Leave a review</Button>
      </TopWrapper>
    <ReviewForm shopId={shopId}/>
    <ReviewsContainer>

    </ReviewsContainer>
    </Container>
  )
}

export default Reviews

const Container = styled.div`
color: ${latte};
margin: 0 10vw;

h2 {
  font-family: ${mainDisplayFont};
  text-transform: uppercase;
  letter-spacing: 1px;
}
`

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`