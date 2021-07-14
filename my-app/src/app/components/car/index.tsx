import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Button } from "../button";

import { CubeIcon, CogIcon, FilterIcon } from "@heroicons/react/outline";

interface ICarProps extends ICar {}

const CarContainer = styled.div`
  width: 16.5em;
  min-height: 22.2em;

  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);

  ${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-4
    sm:m-3
    md:m-6
    object-contain

  `}
`;

const CarThumbnail = styled.img`
  ${tw`
    w-full
    h-48
    object-contain
  `}
`;

const CarName = styled.h3`
  ${tw`
    text-base
    font-bold
    text-black
    my-1
  `}
`;

const PricesContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-start
    mt-3
  `}
`;

const SmallText = styled.p`
  color: inherit;
  ${tw`
    text-xs
    font-thin
  `}
`;

const DailyPrice = styled.h5`
  ${tw`
    flex
    items-center
    text-red-500
    font-bold
    text-sm
    mr-3
  `}
`;

const MonthlyPrice = styled.h5`
  ${tw`
    flex
    items-center
    text-gray-500
    font-bold
    text-sm
  `}
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-400
    fill-current
    text-sm
    mr-1
  `}
`;

const CarDetailsContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-between
    mb-4
  `}
`;

const CarDetail = styled.span`
  ${tw`
    flex
    items-center
  `}
`;

const CarInfo = styled.h6`
  ${tw`
    text-gray-400
    text-xs
  `}
`;

const Separator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
    flex
    bg-gray-300
    my-2
  `}
`;

const RentButton = styled(Button)`
  ${tw`
    min-w-full
    mt-auto
  `}
`;

export function Car(props: ICarProps) {
  const { name, thumbnailSrc, dailyPrice, monthlyPrice, mileage, gearType, gas } = props;

  return (
    <CarContainer>
      <CarThumbnail src={thumbnailSrc} />
      <CarName>{name}</CarName>
      <PricesContainer>
        <DailyPrice>
          ${dailyPrice}
          <SmallText>/Day</SmallText>
        </DailyPrice>
        <MonthlyPrice>
          ${monthlyPrice}
          <SmallText>/Month</SmallText>
        </MonthlyPrice>
      </PricesContainer>
      <Separator />
      <CarDetailsContainer>
        <CarDetail>
          <SmallIcon>
            <CubeIcon className="h-4 w-4" />
          </SmallIcon>
          <CarInfo>{mileage}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <CogIcon className="h-4 w-4" />
          </SmallIcon>
          <CarInfo>{gearType}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FilterIcon className="h-4 w-4" />
          </SmallIcon>
          <CarInfo>{gas}</CarInfo>
        </CarDetail>
      </CarDetailsContainer>
      <RentButton text="Rent now" />
    </CarContainer>
  );
}
