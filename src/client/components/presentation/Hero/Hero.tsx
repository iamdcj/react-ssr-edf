import React, { FC } from "react";
import { HeroContainer, HeroTitle, HeroInner } from "./Hero.styles";

import { Component } from "../../../../_types";

interface Hero extends Component {}

const Hero: FC<Hero> = ({ title, text }) => (
  <HeroContainer>
    <HeroInner>
      {title && <HeroTitle>{title}</HeroTitle>}
      {text && <span dangerouslySetInnerHTML={{ __html: text }} />}
    </HeroInner>
  </HeroContainer>
);

export default Hero;
