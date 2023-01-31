import { useState, useEffect } from "react";
import styled from "styled-components"
import TopBar from "../../components/TopBar/TopBar";
import Hero from "../../components/Hero/Hero";
import bg3 from '../../assets/bg3.jpg';

const Container = styled.div`
background: ${(props) => `url(${props.imgUrl})`}; 
height: 100vh;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`

const Home = () => {
  
  return (
    <Container imgUrl={bg3}>
      <TopBar />
      <Hero />
    </Container>
  );
}

export default Home