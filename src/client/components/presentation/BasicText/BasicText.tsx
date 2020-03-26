import React, { FC } from "react";
import { Component } from "../../../../_types";

import { BasicTextTitle } from "./BasicText.styles";
import { ComponentContainer, ComponentInner } from "../../_styles";

interface BasicText extends Component {}

const BasicText: FC<BasicText> = ({ title, text }) => (
  <ComponentContainer>
    <ComponentInner>
      {title && <BasicTextTitle>{title}</BasicTextTitle>}
      {text && <span dangerouslySetInnerHTML={{ __html: text }} />}
    </ComponentInner>
  </ComponentContainer>
);

export default BasicText;
