import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ShopsContext = createContext();

const ShopsProvider = ({ children }) => {
  const [shops, setShops] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/shops")
      .then((response) => {
        setShops(response.data);
      })
      .catch((error) => {
        setError("Could not load items");
        console.error("Products:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <ShopsContext.Provider value={{ shops, isLoading, error }}>
      {children}
    </ShopsContext.Provider>
  );
};

export { ShopsContext, ShopsProvider };
