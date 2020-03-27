import styled from "@emotion/styled";

const DesktopNavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  color: #fff;
`;

const DesktopNavigationInner = styled.div``;

const DesktopNavigationTitle = styled.h3``;

const DesktopNavigationMenu = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 0;
`;

const DesktopNavigationMenuItem = styled.li`
  margin-left: 10px;

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
