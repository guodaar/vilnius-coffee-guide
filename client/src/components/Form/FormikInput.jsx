import {Field, ErrorMessage} from 'formik';
import styled from 'styled-components';
import { mocha } from '../../const/styles';
import Input from './Input';

const FormikInput = ({ label, variant, name, ...restProps}) => {
  return (
    <Container>
      <label>{label}</label>
      <Field variant={variant} name={name} as={Input} {...restProps}/>
      <StyledError name={name} component='div'/>
    </Container>
  )
}

export default FormikInput

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`

const StyledError = styled(ErrorMessage)`
  color: ${mocha};
  font-size: 0.9rem;
`
