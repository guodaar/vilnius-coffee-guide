import styled from "styled-components"
import { routes } from "../../routes/const"
import { useNavigate } from "react-router-dom";
import {border, latte} from '../../const/colors';


const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${latte};
  border-bottom: ${border};
  margin-left: 5vw;
`

const NavItem = styled.a`
  cursor: pointer;
  padding: 10px;
  font-family: 'Space Mono';
  font-size: 1.3rem;
  border-left: ${border};

  &::before {
    content: '+';
    padding-right: 5px;
    color: transparent;
  }

  &::after{
    content: '+';
    padding-right: 5px;
    color: transparent;
  }

  &:hover::before {
    color: ${latte}
  }

  &:hover::after {
    color: ${latte}
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