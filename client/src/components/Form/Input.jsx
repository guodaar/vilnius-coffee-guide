import styled from 'styled-components'
import { latte, mainFont, mocha } from '../../const/styles'

const Input = ({ variant, ...props}) => {

  if(variant === 'textarea') {
    return (
      <StyledTextarea {...props}/>
      )
  } else {
    return (
      <StyledInput {...props}/>
    )
  }
  
}

export default Input

const StyledInput = styled.input`
  font-size: 1rem;
  padding: 10px 14px;
  color: black;
  border: 0;
  outline: none;
  background-color: ${mocha};
  width: 100%;
  font-family: 'Arial';

  &::placeholder {
    color: black;
    opacity: 0.6;
  }
`

const StyledTextarea = styled.textarea`
  font-size: 1rem;
  padding: 10px 14px;
  border: 0;
  outline: none;
  background-color: ${mocha};
  width: 100%;
  resize: none;
  font-family: 'Arial';

  &::placeholder {
    color: black;
    opacity: 0.6;
  }
`