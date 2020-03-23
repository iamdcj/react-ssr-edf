import React, { FC } from "react";
import { CardContainer, CardTitle, CardInner } from "./Card.styles";

import { Component } from "../../../../_types";

interface Card extends Component {}

const Card: FC<Card> = ({ title, text }) => (
  <CardContainer>
    <CardInner>
      {title && <CardTitle>{title}</CardTitle>}
      {text && <span dangerouslySetInnerHTML={{ __html: text }} />}
    </CardInner>
  </CardContainer>
);

export default Card;
