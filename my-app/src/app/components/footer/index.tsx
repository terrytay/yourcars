import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

import { PhoneIcon, MailIcon } from "@heroicons/react/solid";

const FooterContainer = styled.div`
  background: #1d2124;
  ${tw`
    flex
    flex-col
    min-w-full
    pt-4
    md:pt-12
    items-center
    justify-center
  `}
`;

const InnerContainer = styled.div`
  ${tw`
    max-w-screen-2xl
    flex
    flex-wrap
    xl:justify-center
    w-full
    h-full
    px-6
    space-y-6
    sm:space-y-0
  `}
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-12
    md:mr-16
  `}
`;

const BottomContainer = styled.div`
  ${tw`
    flex
    py-4
    md:pt-12
  `}
`;

const CopyRightText = styled.span`
  ${tw`
    text-xs
    text-gray-400
  `}
`;

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
  `}
`;

const SectionContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-12
  `}
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `}
`;

const ListItem = styled.li`
  ${tw`
    mb-3
  `}

  & > a {
    ${tw`
      text-sm
      text-white

      transition-all
      hover:text-gray-200
    `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-xl
    font-bold
    text-white
    mb-3
  `}
`;

const RedIcon = styled.image`
  ${tw`
    w-9
    h-9
    rounded-full
    flex
    items-center
    justify-center
    bg-red-500
    text-white
    fill-current
    p-2
    mr-2
  `}
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `}
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" />
          <AboutText>
            Yourcar is a Car renting and selling company located in many countries across the world which has high
            quality cars and top rated service.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Models</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms &amp; Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <PhoneIcon />
            </RedIcon>
            <SmallText>+65 1234 5678</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <MailIcon />
            </RedIcon>
            <SmallText>support@yourcar.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyRightText>Copyright &copy; {new Date().getFullYear()} Yourcar. All Rights Reserved.</CopyRightText>
      </BottomContainer>
    </FooterContainer>
  );
}
