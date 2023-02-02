import styled from "styled-components"
import Card from "../../components/Card/Card";
import { coffeeshops } from "../../data/mock";

const Coffeeshops = () => {

  return <>
    <CardsWrapper>
      {coffeeshops.map((shop) => (
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