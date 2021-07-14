import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyle from "./menuStyle";

const MenuItems = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Cars",
    link: "#",
  },
  {
    name: "Services",
    link: "#",
  },
  {
    name: "Contact Us",
    link: "#",
  },
];

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
    items-center
    sm:space-x-4
  `}
`;

const NavItem = styled.li<{ isMobile?: boolean }>`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `}

  ${({ isMobile }) =>
    isMobile &&
    css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `}
    `}
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  if (isMobile) {
    return (
      <Menu right styles={menuStyle}>
        <ListContainer>
          {MenuItems.map((item) => (
            <NavItem isMobile>
              <a href={item.link}>{item.name}</a>
            </NavItem>
          ))}
        </ListContainer>
      </Menu>
    );
  }
  return (
    <ListContainer>
      {MenuItems.map((item) => (
        <NavItem>
          <a href={item.link}>{item.name}</a>
        </NavItem>
      ))}
    </ListContainer>
  );
}
