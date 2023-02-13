import { useQuery } from "react-query";
import { fetchShops } from "../api/coffeeshops";

const COFFEESHOPS = "COFFEESHOPS";

export const useShopData = () => {
  return useQuery(COFFEESHOPS, fetchShops);
};
