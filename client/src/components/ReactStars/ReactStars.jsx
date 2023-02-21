import ReactStars from "react-rating-stars-component";
import { latte } from "../../const/styles";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Stars = ({ rating }) => {
  return (
    <ReactStars
      count={5}
      size={24}
      edit={false}
      value={rating}
      isHalf={true}
      activeColor={latte}
      color={latte}
      emptyIcon={<BsStar />}
      halfIcon={<BsStarHalf />}
      filledIcon={<BsStarFill />}
    />
  );
};

export default Stars;
