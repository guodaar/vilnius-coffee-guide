import styled from "styled-components"
import { COFFEESHOPS_PATH, CONTACT_PATH, HOME_PATH } from "../routes/const"
import { Link } from "react-router-dom";
import {border, darkLatte, latte, mainFont} from '../const/styles';

const TopBar = () => {

  return (
    <Container>
        <NavItem as={Link} to={HOME_PATH}>Home</NavItem>
        <NavItem as={Link} to={COFFEESHOPS_PATH}>Coffee shops</NavItem>
        <NavItem as={Link} to={CONTACT_PATH}>Contact</NavItem>
    </Container>
  )
}

export default TopBar

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
  font-family: ${mainFont};
  font-size: 1.3rem;
  border-left: ${border};
  text-decoration: none;
  color: ${latte};

  &::before, &::after {
    content: '+';
    padding-right: 5px;
    color: transparent;
    transition: 0.2s ease-in-out;
  }

  &:hover::before, &:hover::after {
    color: ${latte}
  }

  &:active {
    color: ${darkLatte};
  }
`