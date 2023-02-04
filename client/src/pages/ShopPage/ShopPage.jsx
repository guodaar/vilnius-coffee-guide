import styled from "styled-components";
import {Link, useNavigate, useParams} from 'react-router-dom';
import { latte, mainDisplayFont } from "../../const/styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css';
import { useContext } from "react";
import { ShopsContext } from "../../contexts/ShopsContext";
import { BsFacebook, BsInstagram, BsFillHouseDoorFill } from 'react-icons/bs'
import Socials from "../../components/Socials/Socials";

const ShopPage = () => {
  const navigate = useNavigate();
  const {shops} = useContext(ShopsContext);
  const {shopId} = useParams();
  const shop = shops.find((shop) => shop.id === Number(shopId))
  const [...photos] = shop.photos;
  const [...links] = shop.websites;
  console.log(links);

  return <Container>
    <Carousel
      loop={true}
      pagination={{
        type: "fraction",
      }}
      navigation={true} 
      modules={[Pagination, Navigation]}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {photos.map((photo) => (
        <SwiperSlide key={photo}><img alt='Coffee shop appearance as seen on social media' src={photo}></img></SwiperSlide>
      ))}
      ...
    </Carousel>
    <InfoContainer>
      <ShopTitle>{shop.name}</ShopTitle>
      {links.map((website) => (
        <Link to={website.link}>
          <BsFacebook/>
        </Link>
      ))}
      
    </InfoContainer>
  </Container>
}

export default ShopPage

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5vw;
`

const Carousel = styled(Swiper)`
  height: 400px;
  display: inline-flex;
  flex: 1;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: ${latte};
`

const ShopTitle = styled.h2`
  font-family: ${mainDisplayFont};
`

