import styled from "styled-components";
import { Formik, Form } from "formik";
import FormikInput from "../../components/Form/FormikInput";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import Button from "../../components/Button/Button";
import {
  americano,
  border,
  latte,
  mainDisplayFont,
  mainFont,
} from "../../const/styles";
import { useState } from "react";
import axios from "axios";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email required"),
  name: Yup.string().required("Name required"),
  comment: Yup.string().required("Please leave a comment!"),
});

const Contact = () => {
  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    email: "",
    shop: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(
        "https://getform.io/f/58caa419-bade-4437-b992-09c5a1fa2e27",
        formData,
        { headers: { Accept: "application/json" } }
      )
      .then(function (response) {
        setFormStatus(true);
        setQuery({
          name: "",
          email: "",
          shop: "",
          comment: "",
        });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Component>
      <Title>Contact Us</Title>
      <p>
        Questions or corrections about featured coffee shops? Share your
        feedback via the below contact form. Your input helps us keep our
        content accurate and informative. We appreciate your support and look
        forward to hearing from you!
      </p>
      <FormWrapper>
        <Formik
          initialValues={{
            email: "",
            name: "",
            shop: "",
            comment: "",
          }}
          validationSchema={validationSchema}
        >
          {() => (
            <StyledForm>
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
                type="shop"
                name="shop"
                label="Is your comment about a specific shop?"
                placeholder="Enter the shop name"
              />
              <FormikInput
                variant="textarea"
                name="comment"
                label="Comment:"
                placeholder="Leave a comment..."
              />
              <ButtonWrapper>
                <Button type="submit">Submit</Button>
              </ButtonWrapper>
            </StyledForm>
          )}
        </Formik>
      </FormWrapper>
    </Component>
  );
};

export default Contact;

const Component = styled.div`
  border: ${border};
  color: ${latte};
  font-family: ${mainFont};
  margin: 32px 5vw;
  padding: 32px 10vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  background-color: ${americano};
`;

const Title = styled.h3`
  font-family: ${mainDisplayFont};
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
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

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
