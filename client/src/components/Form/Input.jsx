import styled from "styled-components";
import { americano, border, latte, mainFont, mocha } from "../../const/styles";

const Input = ({ variant, children, ...props }) => {
  if (variant === "textarea") {
    return <StyledTextarea {...props} />;
  } else if (variant === "select") {
    return <StyledSelect {...props}>{children}</StyledSelect>;
  } else {
    return <StyledInput {...props} />;
  }
};

export default Input;

const StyledInput = styled.input`
  font-size: 1rem;
  padding: 10px 14px;
  color: black;
  border: 0;
  outline: none;
  background-color: ${mocha};
  width: 100%;
  font-family: "Arial";

  &::placeholder {
    color: black;
    opacity: 0.6;
  }
`;

const StyledTextarea = styled.textarea`
  font-size: 1rem;
  padding: 10px 14px;
  border: 0;
  outline: none;
  background-color: ${mocha};
  width: 100%;
  resize: vertical;
  font-family: "Arial";

  &::placeholder {
    color: black;
    opacity: 0.6;
  }
`;

const StyledSelect = styled.select`
  font-size: 1rem;
  padding: 10px 14px;
  border: ${border};
  outline: none;
  background-color: ${americano};
  width: 200px;
  font-family: ${mainFont};
  color: ${latte};

  option {
    background-color: black;
    color: ${latte};
  }
`;
