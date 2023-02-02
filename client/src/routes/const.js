import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Coffeeshops from "../pages/Coffeeshops/Coffeeshops";
import ShopPage from "../pages/ShopPage/ShopPage";
import MainLayout from "../layouts/MainLayout";

export const HOME_PATH = "/";
export const CONTACT_PATH = `${HOME_PATH}contact`;
export const COFFEESHOPS_PATH = `${HOME_PATH}coffeeshops`;
export const SHOP_PATH = `${COFFEESHOPS_PATH}/:shopId`;

export const mainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    {
      path: HOME_PATH,
      Component: Home,
    },
    {
      path: COFFEESHOPS_PATH,
      Component: Coffeeshops,
    },
    {
      path: CONTACT_PATH,
      Component: Contact,
    },
    {
      path: SHOP_PATH,
      Component: ShopPage,
    },
  ],
};
