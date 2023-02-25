import styled from "styled-components";
import {
  americano,
  border,
  latte,
  mainDisplayFont,
  mainFont,
  mocha,
} from "../../const/styles";
import { Formik, Form } from "formik";
import ReactStars from "react-rating-stars-component";
import Button from "../../components/Button/Button";
import FormikInput from "../../components/Form/FormikInput";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { createReview } from "../../api/reviews";
import * as Yup from "yup";
import { generateTimestamp } from "../../utils/getDate";
import { toast } from "react-hot-toast";

const validationSchema = Yup.object().shape({
  rating: Yup.number().min(0.5, "Leave a rating!").required(),
  email: Yup.string().required("Email required"),
  name: Yup.string().required("Name required"),
});

const ReviewForm = ({ shopId, toggle }) => {
  const handleSubmit = (values) => {
    createReview(values)
      .then(() => {
        toast.success("Your review was subbmitted");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        toast.error("Could not submit, try again");
      });
  };

  const date = generateTimestamp();

  return (
    <Container toggle={toggle}>
      <Title>Leave a review</Title>
      <FormWrapper>
        <Formik
          initialValues={{
            rating: 0,
            email: "",
            name: "",
            comment: "",
            timestamp: date,
            shop_id: +shopId,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, errors }) => (
            <StyledForm>
              <RatingContainer>
                <StarsWrapper>
                  <p>Your rating:</p>
                  <ReactStars
                    name={"rating"}
                    count={5}
                    onChange={(value) => setFieldValue("rating", value)}
                    size={24}
                    value={0}
                    activeColor={latte}
                    color={latte}
                    isHalf={true}
                    emptyIcon={<BsStar />}
                    halfIcon={<BsStarHalf />}
                    filledIcon={<BsStarFill />}
                  />
                </StarsWrapper>
                <RatingError>{errors.rating}</RatingError>
              </RatingContainer>
              <InputWrapper>
                <FormikInput
                  type="text"
                  name="name"
                  label="Name:"
                  placeholder="Enter your name"
                />
                <FormikInput
                  type="email"
                  name="email"
                  label="Email:"
                  placeholder="Enter your email (not displayed)"
                />
              </InputWrapper>
              <FormikInput
                variant="textarea"
                name="comment"
                label="Comment:"
                placeholder="Leave a comment..."
              />
              <ButtonWrapper>
                <Button type="submit">Submit review</Button>
              </ButtonWrapper>
            </StyledForm>
          )}
        </Formik>
      </FormWrapper>
    </Container>
  );
};

export default ReviewForm;

const Container = styled.div`
  border: ${border};
  color: ${latte};
  font-family: ${mainFont};
  margin: 32px auto;
  padding: 32px 5vw;
  display: ${({ toggle }) => (toggle ? "flex" : "none")};
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  background-color: ${americano};
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h3`
  font-family: ${mainDisplayFont};
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
`;

const StyledForm = styled(Form)`
  display: flex;
  gap: 24px;
  flex-direction: column;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3vw;
  width: 100%;
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RatingError = styled.p`
  color: ${mocha};
  font-size: 0.9rem;
`;

const StarsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin-right: 16px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
