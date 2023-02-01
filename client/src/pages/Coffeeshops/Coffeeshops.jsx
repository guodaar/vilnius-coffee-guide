import styled from "styled-components"
import Card from "../../components/Card/Card";
import TopBar from "../../components/TopBar/TopBar";
import { coffeeshops } from "../../data/mock";

const Coffeeshops = () => {
  console.log(coffeeshops);

  return <>
    <TopBar/>
    <CardsWrapper>
      {coffeeshops.map((shop) => (
      <Card key={shop.id} shopName={shop.name} image={shop.photos}/>
    ))}
    </CardsWrapper>
  </>
}

export default Coffeeshops

const CardsWrapper = styled.div`
margin: 100px 5vw;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 2vw;
`