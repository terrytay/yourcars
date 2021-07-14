import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";

import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";

import carService from "../../services/carService";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { setTopCars } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectTopCars } from "./selectors";

import { MoonLoader } from "react-spinners";

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    px-4
    md:px-0
    mb-10
  `}
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `}
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `}
`;

const EmptyCars = styled.div`
  ${tw`
    flex
    w-full
    h-20
    justify-center
    items-center
    text-sm
    text-gray-500
  `}
`;

const LoadingContainer = styled.div`
  ${tw`
    flex
    w-full
    h-20
    justify-center
    items-center
    text-base
    text-black
  `}
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars: (cars: ICar[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
  topCars: topCars,
}));

export function TopCars() {
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const { topCars } = useSelector(stateSelector);
  const { setTopCars } = actionDispatch(useDispatch());

  const fetchTopCars = async () => {
    setIsLoading(true);
    const cars = await carService.getCars().catch((err) => {
      console.log("error:", err);
    });

    if (cars) {
      setTopCars(cars);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchTopCars();
  }, []);

  const isEmptyTopCars = !topCars || topCars.length === 0;

  const cars = (!isEmptyTopCars && topCars.map((car) => <Car {...car} />)) || [];

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      {isLoading && (
        <LoadingContainer>
          <MoonLoader loading size={20} />
        </LoadingContainer>
      )}
      {isEmptyTopCars && !isLoading && <EmptyCars>Oops! An error occured. No cars to show for the moment :(</EmptyCars>}
      {!isEmptyTopCars && !isLoading && (
        <CarsContainer>
          <Carousel
            value={current}
            onChange={setCurrent}
            slides={cars}
            plugins={[
              "clickToChange",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
            breakpoints={{
              // @ts-ignore
              640: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
              900: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 3,
                    },
                  },
                ],
              },
            }}
          ></Carousel>
          <Dots value={current} onChange={setCurrent} number={isMobile ? cars.length : +(cars.length / 3)} />
        </CarsContainer>
      )}
    </TopCarsContainer>
  );
}
