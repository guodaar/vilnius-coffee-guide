import { useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import Sorting from "../../components/Sorting/Sorting";
import { latte } from "../../const/styles";
import { useShopData } from "../../hooks/coffeeshops";

const Coffeeshops = () => {
  const [sortState, setSortState] = useState("none");
  const { data, isLoading, error } = useShopData();
  const shops = data || [];

  if (isLoading) {
    return console.log("Kraunasi...");
  }

  if (error) {
    return "Could not load";
  }

  const sortMethods = {
    none: { method: (a, b) => null },
    descending: { method: (a, b) => (a.name > b.name ? 1 : -1) },
    ascending: { method: (a, b) => (a.name > b.name ? -1 : 1) },
  };

  return (
    <>
      <FiltersWrapper>
        <Sorting
          onChange={(e) => setSortState(e.target.value)}
          ascOption="Name: Z - A"
          descOption="Name: A - Z"
        />
      </FiltersWrapper>
      <CardsWrapper>
        {shops.sort(sortMethods[sortState].method).map((shop) => (
          <Card
            key={shop.id}
            shopName={shop.name}
            image={shop.photos}
            id={shop.id}
          />
        ))}
      </CardsWrapper>
    </>
  );
};

export default Coffeeshops;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2vw;
`;

const FiltersWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  color: ${latte};
`;
