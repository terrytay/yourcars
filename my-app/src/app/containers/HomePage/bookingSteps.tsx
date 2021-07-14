import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { LocationMarkerIcon, CalendarIcon, TruckIcon } from "@heroicons/react/outline";

const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    py-3
    lg:py-6

  `}
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-4xl
    text-black
    font-extrabold
  `}
`;

const StepsContainer = styled.div`
  ${tw`
    flex
    justify-evenly
    flex-wrap
    mt-7
    lg:mt-16
  `}
`;

const StepContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:w-96
    items-center
    transition-colors
    hover:text-red-500
    m-3
  `}
`;

const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);

  ${tw`
    flex
    rounded-lg
    items-center
    justify-center
    p-6
  `}
`;

const StepTitle = styled.h4`
  ${tw`
    text-black
    text-lg
    font-semibold
    mt-6
  `}
`;

const StepDescription = styled.p`
  ${tw`
    text-xs
    md:text-sm
    text-center
    w-10/12
    text-gray-600
  `}
`;

const StepIcon = styled.span`
  ${tw`
    text-red-500
    fill-current
    h-10
    w-10
  `}
`;

export function BookingSteps() {
  return (
    <Container>
      <Title>Our Working Steps</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <LocationMarkerIcon />
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDescription>Find the nearest Yourcar point and book your car.</StepDescription>
        </StepContainer>

        <StepContainer>
          <Step>
            <StepIcon>
              <CalendarIcon />
            </StepIcon>
          </Step>
          <StepTitle>Pick-up Date</StepTitle>
          <StepDescription>Pickup the best date to rent a car for you.</StepDescription>
        </StepContainer>

        <StepContainer>
          <Step>
            <StepIcon>
              <TruckIcon />
            </StepIcon>
          </Step>
          <StepTitle>Book Your Car</StepTitle>
          <StepDescription>Book your nice car with ease in one single click.</StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
}
