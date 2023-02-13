import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import { border, latte } from "../../const/styles";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const ReviewCard = ({name, stars, comment}) => {
  return <Container>
    <h4>{name}</h4>
    <p>{comment}</p>
    <ReactStars
        count={5}
        size={24}
        edit={false}
        value={stars}
        isHalf={true}
        activeColor={latte}
        color={latte}
        emptyIcon={<BsStar/>}
        halfIcon={<BsStarHalf/>}
        filledIcon={<BsStarFill/>}
      />
  </Container>
}

export default ReviewCard

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 5vw;
border-bottom: ${border};
`