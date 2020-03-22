import React from "react";
import { CardContainer, CardTitle, CardWrapper } from "./Card.styles";

import { Component } from "../../../../_types";

interface Card extends Component {}

const Card = ({ title, text }: Card) => (
  <CardContainer>
    <CardWrapper>
      {title && <CardTitle>{title}</CardTitle>}
      {text && <span dangerouslySetInnerHTML={{ __html: text }} />}
    </CardWrapper>
  </CardContainer>
);

export default Card;
