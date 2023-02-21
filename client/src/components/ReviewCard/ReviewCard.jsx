import styled from "styled-components";
import { americano, border } from "../../const/styles";
import Stars from "../ReactStars/ReactStars";

const ReviewCard = ({ date, name, stars, comment }) => {
  return (
    <Container>
      <LeftContainer>
        <Stars rating={stars} />
        <Title>{name}</Title>
        <p>{date}</p>
      </LeftContainer>
      <RightContainer>
        <p>{comment}</p>
      </RightContainer>
    </Container>
  );
};

export default ReviewCard;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 5vw;
  background-color: ${americano};
  border: ${border};
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h4`
  text-transform: capitalize;
`;

const RightContainer = styled.div`
  flex: 2;
`;
