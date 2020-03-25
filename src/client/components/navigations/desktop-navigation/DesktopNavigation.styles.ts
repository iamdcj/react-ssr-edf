import styled from "@emotion/styled";

const DesktopNavigationContainer = styled.nav`
  color: #fff;
`;

const DesktopNavigationInner = styled.div``;

const DesktopNavigationTitle = styled.h3``;

const DesktopNavigationMenu = styled.ul`
  display: flex;
  list-style: none;
`;

const DesktopNavigationMenuItem = styled.li`
  margin-right: 10px;

  a {
    color: #fff;
  }
`;

export {
  DesktopNavigationContainer,
  DesktopNavigationInner,
  DesktopNavigationMenu,
  DesktopNavigationMenuItem,
  DesktopNavigationTitle
};
