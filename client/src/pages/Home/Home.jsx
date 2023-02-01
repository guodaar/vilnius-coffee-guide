import styled from "styled-components"
import TopBar from "../../components/TopBar/TopBar";
import { border, latte } from "../../const/colors";

const HeroWrapper = styled.div`
  margin: 100px 5vw;
  display: flex;
  gap: 5vw;

  div {
    flex: 1.5;

    &:last-of-type {
      flex: 1;
    }
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  text-align: left;
  font-size: 6rem;
  font-weight: 100;
  line-height: 85%;
  font-family: 'Unbounded';
  color: ${latte};

  &:first-of-type::before {
  content: '+';
  padding-right: 5px;
  }

  &:first-of-type::after {
  content: '+';
  padding-left: 5px;
  }

  &:last-of-type {
    font-style: italic;
  }
`;

const Description = styled.p`
  color: ${latte};
  font-family: 'Space Mono';
  font-size: 0.9rem;
  text-align: right;
  padding: 10px 10px 0 0;
  border-top: ${border};
  border-right: ${border};
`

const Home = () => {
  
  return (
    <div>
      <TopBar />
      <HeroWrapper>
        <div>
          <Title>Vilnius</Title>
          <Title>coffee</Title>
          <Title>guide</Title>
        </div>
        <div>
          <Description>
          Find the best coffee shops in Vilnius with our comprehensive guide. Browse user reviews, find details, and discover your new favorite place. Our platform connects coffee lovers, helping you find the perfect spot for your needs. Whether you're looking for a cozy workspace or a place to catch up with friends, start exploring today and find your coffee haven in Vilnius!
          </Description>
        </div>
    </HeroWrapper>
    </div>
  );
}

export default Home