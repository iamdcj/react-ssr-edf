import React, { FC } from "react";
import { Component } from "../../../../_types";

import { FeatureTitle } from "./Feature.styles";
import { ComponentContainer, ComponentInner } from "../../_styles";

interface Feature extends Component {
  subTitle: string;
}

const Feature: FC<Feature> = ({ title, subTitle }) => (
  <ComponentContainer>
    <ComponentInner>
      {title && <FeatureTitle>{title}</FeatureTitle>}
      {subTitle && <p>{subTitle}</p>}
    </ComponentInner>
  </ComponentContainer>
);

export default Feature;
