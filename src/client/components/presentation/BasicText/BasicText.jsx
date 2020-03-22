import React from "react";
import {
  BasicTextContainer,
  BasicTextTitle,
  BasicTextWrapper
} from "./BasicText.styles";

import { Component } '../../../../_types'

interface BasicText extends Component {}

const BasicText ({ title, text }: BasicText) => (
  <BasicTextContainer>
    <BasicTextWrapper>
      {title && <BasicTextTitle title={title} />}
      {
        text &&
        <span dangerouslySetInnerHTML={{ __html: text }} />
      }
    </BasicTextWrapper>
  </BasicTextContainer>
);

export default BasicText;
