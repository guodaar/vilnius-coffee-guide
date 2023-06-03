import axios from "axios";

const REVIEW_API_URL = "https://vilnius-coffee-guide.onrender.com/reviews";

export const fetchReviews = async () => {
  const response = await axios.get(REVIEW_API_URL);
  return response.data;
};

export const createReview = async (newReview) => {
  const response = await axios.post(REVIEW_API_URL, newReview);
  return response.data;
};
