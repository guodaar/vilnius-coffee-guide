import styled from "styled-components";
import {useParams} from 'react-router-dom';
import { useRef } from "react";
import Links from "../../components/Socials/Socials";
import { darkLatte, latte, mainDisplayFont, mainFont, milk } from "../../const/styles";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css';
import Reviews from "./Reviews";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { useShopData } from "../../hooks/coffeeshops";
import { useReviewData } from "../../hooks/reviews";

const ShopPage = () => {
  const ref = useRef(null);

  const {data: shopData} = useShopData();
  const shops = shopData || [];

  const {data: reviewsData} = useReviewData();
  const reviews = reviewsData || [];

  const {shopId} = useParams();
  const shop = shops.find((shop) => shop.id === Number(shopId));

  const photos = shop ? shop.photos: [];
  const links = shop? shop.websites : {};

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  if (!shop) {
    return null
  } 

  if (!reviews) {
    return null
  } 

  return (
  <MainContainer>
  <ShopContainer>
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
      <RatingContainer>
        <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        edit={false}
        value={0}
        isHalf={true}
        activeColor={latte}
        color={latte}
        emptyIcon={<BsStar/>}
        halfIcon={<BsStarHalf/>}
        filledIcon={<BsStarFill/>}
      />
        <ReviewsLink onClick={handleClick}>Reviews</ReviewsLink>
      </RatingContainer>
      
      <ShopTitle>{shop.name}</ShopTitle>
      <Socials>
        <Links website="facebook" link={links}/>
        <Links website="instagram" link={links}/>
        <Links website="homepage" link={links}/>
      </Socials>
      <p>Address: {shop.address}</p>
    </InfoContainer>
  </ShopContainer>
  <div ref={ref}>
    <Reviews shopId={shopId}/>
  </div>
  </MainContainer>
)}

export default ShopPage

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`

const ShopContainer = styled.div`
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

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const ReviewsLink = styled.a`
text-decoration: underline;

  &:hover {
    cursor: pointer;
    text-decoration: none;
  }

  &:active {
    color: ${darkLatte}
  }
`

const ShopTitle = styled.h2`
  font-family: ${mainDisplayFont};
  letter-spacing: 1px;
`

const Socials = styled.div`
  display: flex;
  gap: 20px;

`

