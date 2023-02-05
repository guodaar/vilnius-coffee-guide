import { useContext, useState } from "react";
import styled from "styled-components"
import Card from "../../components/Card/Card";
import { ShopsContext } from "../../contexts/ShopsContext";

const Coffeeshops = () => {
  const {shops} = useContext(ShopsContext);
  console.log(shops)

  return <>
    <CardsWrapper>
      {shops.map((shop) => (
      <Card 
      key={shop.id} 
      shopName={shop.name} 
      image={shop.photos} 
      id={shop.id}/>
    ))}
    </CardsWrapper>
  </>
}

export default Coffeeshops

const CardsWrapper = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 2vw;
`