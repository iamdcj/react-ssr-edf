import React, { FC } from "react";
import { QuoteContainer, QuoteTitle, QuoteInner } from "./Quote.styles";

import { Component } from "../../../../_types";

interface Quote extends Component {}

const Quote: FC<Quote> = ({ title, text }) => (
  <QuoteContainer>
    <QuoteInner>
      {title && <QuoteTitle>{title}</QuoteTitle>}
      {text && <span dangerouslySetInnerHTML={{ __html: text }} />}
    </QuoteInner>
  </QuoteContainer>
);

export default Quote;
