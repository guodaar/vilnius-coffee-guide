import styled from "styled-components"
import Card from "../../components/Card/Card";
import TopBar from "../../components/TopBar/TopBar";
import { coffeeshops } from "../../data/mock";

const CardsWrapper = styled.div`
margin: 100px 5vw;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 10px;
`

const Coffeeshops = () => {
  return <div>
    <TopBar/>
    <CardsWrapper>
      {coffeeshops.map((shop) => (
      <Card key={shop.id} background={shop.photoURL}>{shop.name}</Card>
    ))}
    </CardsWrapper>
    
  </div>
}

export default Coffeeshops