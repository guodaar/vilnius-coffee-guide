import styled from "styled-components"
import { routes } from "../../routes/const"
import { useNavigate } from "react-router-dom";
import {latte} from '../../const/colors'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: ${latte};
`

const NavItem = styled.a`
  cursor: pointer;
  padding: 10px;

  &:hover::before{
    content: '+';
    padding-right: 5px;
  }

`

const TopBar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      {routes.map((route) => (
        <NavItem onClick={() => navigate(route.path)}>{route.name}</NavItem>
      ))}
    </Container>
  )
}

export default TopBar