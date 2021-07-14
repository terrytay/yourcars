import styled from "styled-components";
import tw from "twin.macro";

import { Logo } from "../logo";
import { NavItems } from "./navitem";

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-row
    items-center
    px-5
    lg:px-10
    justify-between
  `}
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo />
      <NavItems />
    </NavbarContainer>
  );
}

export default Navbar;
