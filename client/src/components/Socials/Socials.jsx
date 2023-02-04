import styled from "styled-components"
import { latte } from "../../const/styles"
import { BsFacebook, BsInstagram, BsFillHouseDoorFill } from 'react-icons/bs'
import { Link } from "react-router-dom"



const Socials = ({link, instaLink, fbLink, homeLink}) => {

  if (link.name === 'facebook') {
    return <Link to={fbLink}><BsFacebook/></Link>
  } 
  if (link.name === 'instagram') {
    return <Link to={instaLink}><BsInstagram/></Link>
  }
  if (link.name === 'homepage') {
    return <Link to={homeLink}><BsFillHouseDoorFill/></Link>
  }
  
}

export default Socials
