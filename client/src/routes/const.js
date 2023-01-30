import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Coffeeshops from "../pages/Coffeeshops/Coffeeshops";
import ShopPage from "../pages/ShopPage/ShopPage";

export const HOME_PATH = "/";
export const CONTACT_PATH = "/contact";
export const COFFEESHOPS_PATH = "/coffeeshops";
export const SHOP_PATH = `${COFFEESHOPS_PATH}:coffeeshop`;

export const routes = [
  {
    path: HOME_PATH,
    Component: Home,
  },
  {
    path: CONTACT_PATH,
    Component: Contact,
  },
  {
    path: COFFEESHOPS_PATH,
    Component: Coffeeshops,
  },
  {
    path: SHOP_PATH,
    Component: ShopPage,
  },
];
