import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ReviewsContext = createContext();

const ReviewsProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/reviews")
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        setError("Could not load items");
        console.error("Reviews:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <ReviewsContext.Provider value={{ reviews, isLoading, error }}>
      {children}
    </ReviewsContext.Provider>
  );
};

export { ReviewsContext, ReviewsProvider };
