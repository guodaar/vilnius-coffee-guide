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
    name: "Home",
    Component: Home,
  },
  {
    path: COFFEESHOPS_PATH,
    name: "Coffee shops",
    Component: Coffeeshops,
  },
  {
    path: CONTACT_PATH,
    name: "Contact",
    Component: Contact,
  },
];

export const secondaryRoutes = [
  {
    path: SHOP_PATH,
    Component: ShopPage,
  },
];
