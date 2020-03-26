import React, { FC } from "react";
import { FooterContainer, FooterInner } from "./Footer.styles";

interface footer {}

const date = new Date();

const Footer: FC<footer> = () => (
  <FooterContainer>
    <FooterInner>&copy; {date.getFullYear()} Dept</FooterInner>
  </FooterContainer>
);

export default Footer;
