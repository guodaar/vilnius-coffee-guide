import styled from "styled-components";
import { border, latte, mainFont } from "../../const/styles";
import { SHOP_PATH } from "../../routes/const";
import Button from "../Button/Button";
import { useParams, useNavigate, generatePath } from "react-router-dom";
import Stars from "../ReactStars/ReactStars";

const Card = ({ shopName, image, id, rating }) => {
  const navigate = useNavigate();
  const { shop } = useParams();

  const navigateToShop = (shop, shopId) => {
    const path = generatePath(SHOP_PATH, { shop, shopId });
    navigate(path);
  };

  return (
    <Container>
      <Title>{shopName}</Title>
      <CardContent image={image}>
        <HoverDiv>
          <Stars rating={rating} />
          <Button onClick={() => navigateToShop(shop, id)}>See more</Button>
        </HoverDiv>
      </CardContent>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  border: ${border};
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: ${latte};
  border-bottom: ${border};
  font-size: 0.9rem;
  font-family: ${mainFont};
  padding: 5px;
  flex: 1;
`;

const CardContent = styled.div`
  min-height: 300px;
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  background: url(${(props) => props.image}) no-repeat center;
  background-size: cover;
`;
const HoverDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  gap: 30px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  opacity: 0;
  background-color: rgba(16, 7, 4, 0.7);
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
