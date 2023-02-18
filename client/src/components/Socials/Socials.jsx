import styled from "styled-components"
import { darkLatte, latte } from "../../const/styles"
import { BsFacebook, BsInstagram, BsFillHouseDoorFill } from 'react-icons/bs'
import { Link } from "react-router-dom";



const Links = ({website, link}) => {

  if (website === 'facebook') {
    return <Icon to={link.facebook}><BsFacebook/></Icon>
  } else if (website === 'instagram') {
    return <Icon to={link.instagram}><BsInstagram/></Icon>
  } else if (website === 'homepage') {
    return <Icon to={link.homepage}><BsFillHouseDoorFill/></Icon>
  } else {
    return <div></div>
  }
  
}

export default Links

const Icon = styled(Link)`
  svg {
    color: ${latte};
    font-size: 2rem;
  }

  svg:hover {
    color: ${darkLatte}
  }
`
