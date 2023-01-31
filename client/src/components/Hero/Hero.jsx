import styled from "styled-components";

const Container = styled.div`

`

const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-size: 3rem;

`

const Hero = () => {
  return (
  <Container>
    <Title>Vilnius coffee guide</Title>
  </Container>
  )
}

export default Hero;