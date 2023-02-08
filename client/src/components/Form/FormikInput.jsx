import {Field, ErrorMessage} from 'formik';
import styled from 'styled-components';
import Input from './Input';

const FormikInput = ({ label, variant, name, ...restProps}) => {
  return (
    <Container>
      <label>{label}</label>
      <Field variant={variant} name={name} as={Input} {...restProps}/>
      <ErrorMessage name={name} component='div'/>
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
