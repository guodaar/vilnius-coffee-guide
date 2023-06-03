import axios from "axios";

const SHOP_API = "https://vilnius-coffee-guide.onrender.com/shops";

export const fetchShops = async () => {
  const response = await axios.get(SHOP_API);
  return response.data;
};
