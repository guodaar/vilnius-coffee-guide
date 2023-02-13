import styled from "styled-components";
import { latte, mainDisplayFont } from "../../const/styles";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import Button from "../../components/Button/Button";
import { useReviewData } from "../../hooks/reviews";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

const Reviews = ({shopId}) => {
  const {data, isLoading, error} = useReviewData();
  const reviews = data || [];
  console.log(reviews);

  if (isLoading) {
    return console.log("Kraunasi...")
  } 

  if (error) {
    return 'Could not load';
  }
  
  return (
    <Container>
      <TopWrapper>
        <h2>Customer reviews</h2>
        <Button>Leave a review</Button>
      </TopWrapper>
    <ReviewForm shopId={shopId}/>
    <ReviewsContainer>
      {reviews.map((review) => (
        <ReviewCard name={review.name} stars={review.rating} comment={review.comment}/>
      ))}
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
`