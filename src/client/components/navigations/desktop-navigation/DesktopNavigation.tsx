import React, { FC } from "react";
import {
  DesktopNavigationContainer,
  DesktopNavigationInner,
  DesktopNavigationMenu,
  DesktopNavigationMenuItem,
  DesktopNavigationTitle
} from "./DesktopNavigation.styles";

interface DesktopNavigation {}

const DesktopNavigation: FC<DesktopNavigation> = () => (
  <DesktopNavigationContainer>
    {/* <DesktopNavigationTitle>Desktop Navigation</DesktopNavigationTitle> */}
    <DesktopNavigationInner>
      <DesktopNavigationMenu>
        <DesktopNavigationMenuItem>
          <a href="https://github.com/iamdcj/react-ssr-edf" target="_blank">
            GitHub
          </a>
        </DesktopNavigationMenuItem>
      </DesktopNavigationMenu>
    </DesktopNavigationInner>
  </DesktopNavigationContainer>
);

export default DesktopNavigation;
