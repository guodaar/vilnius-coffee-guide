import styled from "styled-components";
import { border } from "../../const/colors";

const Container = styled.div`
  height: 300px;
  border: ${border};
  background: url(${(props) => props.background}) no-repeat center;
  background-size: cover;
`

const Card = ({background}) => {
  return <Container background={background}>
    
  </Container>
}

export default Card