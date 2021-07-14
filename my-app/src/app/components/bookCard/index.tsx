import styled, { css } from "styled-components";
import tw from "twin.macro";

import { CalendarIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { Marginer } from "../marginer";
import { Button } from "../button";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { SCREENS } from "../responsive";

export interface IBookCardProp {}

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center
    items-center
    rounded-lg
    bg-white
    py-1
    px-2
    md:py-2
    md:px-9
  `};
`;

const ItemContainer = styled.div`
  ${tw`
    flex items-center relative
  `}
`;

const Icon = styled.span`
  ${tw`
    text-red-500
    fill-current
    text-xs
    md:text-base
    mr-1
    md:mr-3
    cursor-pointer
  `}
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1
    cursor-pointer
  `}
`;

const Name = styled.button`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
    cursor-pointer
    select-none
  `}
`;

const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mx-2
    md:mx-5
  `}
`;

const DateCalendar = styled(Calendar)<{ offset?: boolean }>`
  position: absolute;
  max-width: none;
  top: 2em;
  left: 0em;
  user-select: none;

  ${({ offset }) =>
    offset &&
    css`
      left: -7em;
    `}

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
`;

export function BookCard(prop: IBookCardProp) {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);

  const [returnDate, setreturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const toggleStartCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
    setReturnCalendarOpen(false);
  };

  const toggleReturnCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    setStartCalendarOpen(false);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <CalendarIcon className="h-5 w-5" />
        </Icon>
        <Name onClick={toggleStartCalendar}>Pick Up Date</Name>
        <SmallIcon onClick={toggleStartCalendar}>
          {isStartCalendarOpen ? <ChevronUpIcon className="h-4 w-4" /> : <ChevronDownIcon className="h-4 w-4" />}
        </SmallIcon>
        {isStartCalendarOpen && <DateCalendar value={startDate} onChange={setStartDate} />}
      </ItemContainer>

      <LineSeparator />

      <ItemContainer>
        <Icon>
          <CalendarIcon className="h-5 w-5" />
        </Icon>
        <Name onClick={toggleReturnCalendar}>Return Date</Name>
        <SmallIcon onClick={toggleReturnCalendar}>
          {isReturnCalendarOpen ? <ChevronUpIcon className="h-4 w-4" /> : <ChevronDownIcon className="h-4 w-4" />}
        </SmallIcon>
        {isReturnCalendarOpen && <DateCalendar value={returnDate} onChange={setreturnDate} offset />}
      </ItemContainer>

      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book Your Ride" />
    </CardContainer>
  );
}
