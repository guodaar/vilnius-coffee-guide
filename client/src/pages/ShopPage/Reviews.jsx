import styled from "styled-components";
import { border, latte, mainDisplayFont } from "../../const/styles";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import Button from "../../components/Button/Button";
import { useReviewData } from "../../hooks/reviews";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { useState } from "react";
import { convertDate } from "../../utils/getDate";
import Input from "../../components/Form/Input";
import { sortMethods } from "../../utils/sortMethods";

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

  return (
    <Container>
      <TopWrapper>
        <h2>Customer reviews</h2>
        <div>
          <Input
            variant="select"
            defaultValue={"DEFAULT"}
            onChange={(e) => setSortState(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              Sort by:
            </option>
            <option value="starsDesc">Rate: low - high</option>
            <option value="starsAsc">Rate: high - low</option>
          </Input>
          <Button onClick={handleToggle}>Leave a review</Button>
        </div>
      </TopWrapper>
      <ReviewForm toggle={toggle} shopId={shopId} />
      <ReviewsContainer>
        {shopReviews.sort(sortMethods[sortState].method).map((review) => (
          <ReviewCard
            key={review.name + review.timestamp}
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

  div {
    display: flex;
    justify-content: flex-end;
    gap: 2vw;
  }
`;

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 36px;
`;
