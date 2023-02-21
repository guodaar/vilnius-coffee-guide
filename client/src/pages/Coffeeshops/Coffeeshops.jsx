import { useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import Input from "../../components/Form/Input";
import { latte } from "../../const/styles";
import { useShopData } from "../../hooks/coffeeshops";
import { sortMethods } from "../../utils/sortMethods";

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

  return (
    <>
      <FiltersWrapper>
        <Input
          variant="select"
          defaultValue={"DEFAULT"}
          onChange={(e) => setSortState(e.target.value)}
        >
          <option value="DEFAULT" disabled>
            Sort by:
          </option>
          <option value="nameDesc">Name: A - Z</option>
          <option value="nameAsc">Name: Z - A</option>
          <option value="rateDesc">Rate: low - high</option>
          <option value="rateAsc">Rate: high - low</option>
        </Input>
      </FiltersWrapper>
      <CardsWrapper>
        {shops.sort(sortMethods[sortState].method).map((shop) => (
          <Card
            key={shop.id}
            shopName={shop.name}
            image={shop.photos}
            id={shop.id}
            rating={shop.rating_avg}
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
