import styled from "styled-components"
import Card from "../../components/Card/Card";
import { useShopData } from "../../hooks/coffeeshops";

const Coffeeshops = () => {
  const {data, isLoading, error} = useShopData();
  const shops = data || [];

  if (isLoading) {
    return console.log("Kraunasi...")
  } 

  if (error) {
    return 'Could not load';
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