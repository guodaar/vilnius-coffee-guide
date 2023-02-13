import axios from "axios";

const SHOP_API = "http://localhost:8000/shops";

export const fetchShops = async () => {
  const response = await axios.get(SHOP_API);
  return response.data;
};
