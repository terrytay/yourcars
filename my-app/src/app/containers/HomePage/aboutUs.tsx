import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import JeepImg from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    py-4
    px-7
    md:px-0
    bg-white
  `}
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `}
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `}
`;

const InfoText = styled.p`
  ${tw`
    text-gray-500
    text-sm
    md:text-base
    max-w-2xl
    mt-4
    font-normal
  `}
`;

export function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} />
      </CarContainer>
      <InfoContainer>
        <Title>Feel The Best Experience With Our Rental Deals</Title>
        <InfoText>
          Commodo adipisicing Lorem velit veniam culpa reprehenderit ut ad ea fugiat pariatur consectetur anim. Commodo
          proident reprehenderit sit et id commodo veniam quis adipisicing incididunt. Et minim laborum do Lorem id
          tempor nostrud deserunt ex.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}
