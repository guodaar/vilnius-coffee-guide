import styled from "styled-components";
import {useParams} from 'react-router-dom';
import { latte, mainDisplayFont, mainFont, milk, mocha } from "../../const/styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css';
import { useContext } from "react";
import { ShopsContext } from "../../contexts/ShopsContext";
import Links from "../../components/Socials/Socials";
import ReactStars from "react-rating-stars-component";

const ShopPage = () => {
  const {shops} = useContext(ShopsContext);
  const {shopId} = useParams();
  const shop = shops.find((shop) => shop.id === Number(shopId));
  const photos = shop ? shop.photos: [];
  const links = shop? shop.websites : {};

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  if (!shop) {
    return null
  } 
 
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
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={28}
        edit={false}
        value={4}
        activeColor={milk}
        color={mocha}
        isHalf={true}
      />
      <ShopTitle>{shop.name}</ShopTitle>
      <Socials>
        <Links website="facebook" link={links}/>
        <Links website="instagram" link={links}/>
        <Links website="homepage" link={links}/>
      </Socials>
      <p>Address: {shop.address}</p>
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
  height: 450px;
  display: inline-flex;
  flex: 1;
  color: ${milk};

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
  gap: 20px;
  color: ${latte};
  font-family: ${mainFont};
`

const ShopTitle = styled.h2`
  font-family: ${mainDisplayFont};
`

const Socials = styled.div`
  display: flex;
  gap: 20px;

`

