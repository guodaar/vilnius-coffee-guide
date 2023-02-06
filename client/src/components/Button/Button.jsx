import styled from "styled-components"
import { border, latte, mainFont } from "../../const/styles"

const Button = ({children, onClick}) => {
  return (
    <CustomButton onClick={onClick}>{children}</CustomButton>
  )
}

export default Button

const CustomButton = styled.button`
background-color: transparent;
color: ${latte};
padding: 10px 20px;
border: ${border};
position: relative;
font-family: ${mainFont};
text-transform: uppercase;
transition: 0.2s ease-in-out;

&::before, &::after {
  content: '+';
  font-size: 1rem;
  padding: 0 3px;
}

&:hover {
  cursor: pointer;
  background-color: ${latte};
  color: black;
}

&:hover::before, &:hover::after {
    color: black;
  }
`

