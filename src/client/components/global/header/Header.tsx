import React, { FC } from "react";
import { HeaderContainer, HeaderInner } from "./Header.styles";

import Logo from "../logo";
import DesktopNavigation from "../../navigations/desktop-navigation";

interface header {}

const Header: FC<header> = () => (
  <HeaderContainer>
    <HeaderInner>
      <Logo />
      <DesktopNavigation />
    </HeaderInner>
  </HeaderContainer>
);

export default Header;
