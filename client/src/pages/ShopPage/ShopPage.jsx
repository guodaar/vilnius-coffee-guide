import styled from "styled-components";
import {useParams} from 'react-router-dom';
import { coffeeshops } from "../../data/mock";
import { latte } from "../../const/styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css';

const Component = styled.div`
color: ${latte};
`

const ShopPage = () => {
  const {shopId} = useParams();
  const shop = coffeeshops.find((shop) => shop.id === Number(shopId))
  const [...photos] = shop.photos;

  return <Component>
    {shop.name}
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
        <SwiperSlide><img alt='Coffee shop appearance as seen on social media' src={photo}></img></SwiperSlide>
      ))}
      ...
    </Carousel>
  </Component>
}

export default ShopPage

const Carousel = styled(Swiper)`
  width: 400px;
  height: 400px;
  display: inline-flex;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    
  }
`;
