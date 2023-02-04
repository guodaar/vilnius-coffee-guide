import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ShopsContext = createContext();

const ShopsProvider = ({ children }) => {
  const [shops, setShops] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/shops")
      .then((response) => {
        setShops(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Products:", error);
      });
  }, []);

  return (
    <ShopsContext.Provider value={{ shops, isLoading }}>
      {children}
    </ShopsContext.Provider>
  );
};

export { ShopsContext, ShopsProvider };
