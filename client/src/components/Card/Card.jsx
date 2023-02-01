import styled from "styled-components";
import { border, latte, mainFont } from "../../const/styles";
import Button from "../Button/Button";

const Card = ({shopName, image}) => {
  return <Container >
    <Title>{shopName}</Title>
    <CardContent image={image}>
      <HoverDiv>
        <Button>See more</Button>
      </HoverDiv>
    </CardContent>
  </Container>
}

export default Card

const Container = styled.div`
  border: ${border};
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  color: ${latte};
  border-bottom: ${border};
  font-size: 0.9rem;
  font-family: ${mainFont};
  padding: 5px;
`

const CardContent = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  position: relative;
  background: url(${props => props.image}) no-repeat center;
  background-size: cover;

`
const HoverDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  opacity: 0;
  background-color: rgba(16, 7, 4, 0.7);
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`