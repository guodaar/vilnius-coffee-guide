import axios from "axios";

const REVIEW_API_URL = "http://localhost:8000/reviews";

export const createReview = async (newReview) => {
  const response = await axios.post(REVIEW_API_URL, newReview);
  return response.data;
};
