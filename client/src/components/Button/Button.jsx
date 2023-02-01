import styled from "styled-components"
import { border, latte, mainFont } from "../../const/styles"

const Button = ({children, onClick}) => {
  return (
    <CustomButton onClick={onClick}>{children}</CustomButton>
  )
}

export default Button

const CustomButton = styled.button`
background-color: ${latte};
color: black;
padding: 10px 20px;
border: ${border};
position: relative;
font-family: ${mainFont};
transition: 0.2s ease-in-out;

&:hover {
  background-color: transparent;
  color: ${latte};
  cursor: pointer;
}
`

