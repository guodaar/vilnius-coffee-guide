import { useQuery } from "react-query";
import { fetchReviews } from "../api/reviews";

const REVIEWS = "REVIEWS";

export const useReviewData = () => {
  return useQuery(REVIEWS, fetchReviews);
};
