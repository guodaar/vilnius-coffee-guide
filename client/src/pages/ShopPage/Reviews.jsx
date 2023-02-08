import styled from "styled-components";
import { latte, mainDisplayFont, mainFont, milk, mocha } from "../../const/styles";
import ReviewForm from "../../components/ReviewForm/ReviewForm";

const Reviews = () => {
  
  return (
    <Container>
    <h2>Customer reviews</h2>
    <ReviewForm/>
    </Container>
  )
}

export default Reviews

const Container = styled.div`
color: ${latte};

h2 {
  font-family: ${mainDisplayFont};
  text-transform: uppercase;
  letter-spacing: 1px;
}
`
