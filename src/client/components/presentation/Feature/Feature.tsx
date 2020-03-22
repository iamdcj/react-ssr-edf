import React from "react";
import { FeatureContainer, FeatureTitle, FeatureInner } from "./Feature.styles";

import { Component } from "../../../../_types";

interface Feature extends Component {}

const Feature = ({ title, text }: Feature) => (
  <FeatureContainer>
    <FeatureInner>
      {title && <FeatureTitle>{title}</FeatureTitle>}
      {text && <span dangerouslySetInnerHTML={{ __html: text }} />}
    </FeatureInner>
  </FeatureContainer>
);

export default Feature;
