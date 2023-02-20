import styled from "styled-components";
import { border, latte, mainDisplayFont } from "../../const/styles";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import Button from "../../components/Button/Button";
import { useReviewData } from "../../hooks/reviews";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { useState } from "react";
import { convertDate } from "../../utils/getDate";
import Sorting from "../../components/Sorting/Sorting";

const Reviews = ({ shopId }) => {
  const [sortState, setSortState] = useState("none");
  const { data, isLoading, error } = useReviewData();
  const reviews = data || [];
  const shopReviews =
    reviews.filter((review) => review.shop_id === Number(shopId)) || [];

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  if (isLoading) {
    return console.log("Kraunasi...");
  }

  if (error) {
    return "Could not load";
  }

  const sortMethods = {
    none: { method: (a, b) => null },
    descending: { method: (a, b) => (a.rating > b.rating ? 1 : -1) },
    ascending: { method: (a, b) => (a.rating > b.rating ? -1 : 1) },
  };

  return (
    <Container>
      <TopWrapper>
        <h2>Customer reviews</h2>
        <Button onClick={handleToggle}>Leave a review</Button>
        <Sorting
          onChange={(e) => setSortState(e.target.value)}
          ascOption="Rating: low - high"
          descOption="Rating: high - to low"
        />
      </TopWrapper>
      <ReviewForm toggle={toggle} shopId={shopId} />
      <ReviewsContainer>
        {shopReviews.sort(sortMethods[sortState].method).map((review) => (
          <ReviewCard
            key={review.timestamp}
            date={convertDate(review.timestamp)}
            name={review.name}
            stars={review.rating}
            comment={review.comment}
          />
        ))}
      </ReviewsContainer>
    </Container>
  );
};

export default Reviews;

const Container = styled.div`
  color: ${latte};
  padding-top: 36px;
  border-top: ${border};

  h2 {
    font-family: ${mainDisplayFont};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 36px;
`;
