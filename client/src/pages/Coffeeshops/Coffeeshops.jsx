import { useContext } from "react";
import styled from "styled-components"
import Card from "../../components/Card/Card";
import { ShopsContext } from "../../contexts/ShopsContext";

const Coffeeshops = () => {
  const {shops, isLoading, error} = useContext(ShopsContext) || [];
  console.log(shops)

  if (isLoading) {
    return console.log("Kraunasi...")
  } 

  if (error) {
    return error;
  }

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