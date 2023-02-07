import styled from "styled-components";
import { latte, mainDisplayFont, mainFont, milk, mocha } from "../../const/styles";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import ReactStars from "react-rating-stars-component";
import Button from '../../components/Button/Button';

const Reviews = () => {
  const handleSubmit = (values) => {
    console.log(values);
  }

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <Container>
    <h3>Customer reviews</h3>
    <ReactStars
          count={5}
          onChange={ratingChanged}
          size={28}
          value={0}
          activeColor={milk}
          color={mocha}
          isHalf={true}
        />
    <Formik initialValues={{
      email: '',
      name: '',
      comment: '',
    }}
    onSubmit={handleSubmit}>
      {() => (
        <StyledForm>
          <Field as={StyledInput} type='email' name='email'/>
          <Field as={StyledInput} type='text' name='name'/>
          <Field as={StyledTextarea} name='comment'/>
          <Button type='submit'>Submit review</Button>
      </StyledForm>
      )}
    </Formik>
    </Container>
  )
}

export default Reviews

const Container = styled.div`
color: ${latte};

h3 {
  font-family: ${mainDisplayFont};
  text-transform: uppercase;
  letter-spacing: 1px;
}
`

const StyledForm = styled(Form)`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`

const StyledInput = styled.input`
  outline: none;
  font-family: ${mainFont};
  border: none;
  padding: 10px 30px;
`

const StyledTextarea = StyledInput.withComponent('textarea');