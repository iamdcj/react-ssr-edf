import React from "react";
import Button from "./Button";
import { Title, FlexDiv } from "client/components/_misc/storybook";

export default { title: "Styleguide/CTAs" };

const PrimaryCTAs = [
  {
    text: "Default"
  },
  {
    text: "Hovered",
    hovered: true
  },
  {
    text: "Active",
    active: true
  },
  {
    text: "Disabled",
    disabled: true
  }
];

const SecondaryCTAs = [
  {
    text: "Default"
  },
  {
    text: "Hovered",
    hovered: true
  },
  {
    text: "Active",
    active: true
  },
  {
    text: "Disabled",
    disabled: true
  }
];

const IconButtons = [
  {
    text: "Default"
  },
  {
    text: "Hovered",
    hovered: true
  },
  {
    text: "Active",
    active: true
  },
  {
    text: "Disabled",
    disabled: true
  }
];

export const Buttons = () => (
  <>
    <FlexDiv>
      <Title>Primary</Title>
      {PrimaryCTAs.map(({ text, disabled, active, hovered }, i) => (
        <Button
          key={`Primary${i}`}
          variant="primary"
          text={text}
          disabled={disabled}
          active={active}
          hovered={hovered}
        />
      ))}
    </FlexDiv>
    <FlexDiv>
      <Title>Primary w/ Icon</Title>
      {PrimaryCTAs.map(({ text, disabled, active, hovered }, i) => (
        <Button
          key={`Primary w/ Icon${i}`}
          icon="search"
          variant="primary"
          text={text}
          disabled={disabled}
          active={active}
          hovered={hovered}
        />
      ))}
    </FlexDiv>
    <FlexDiv>
      <Title>Secondary</Title>
      {SecondaryCTAs.map(({ text, disabled, active, hovered }, i) => (
        <Button
          key={`Secondary${i}`}
          variant="secondary"
          text={text}
          disabled={disabled}
          active={active}
          hovered={hovered}
        />
      ))}
    </FlexDiv>
    <FlexDiv>
      <Title>Secondary w/ Icon</Title>
      {IconButtons.map(({ text, disabled, active, hovered }, i) => (
        <Button
          key={`Secondary w/ Icon${i}`}
          icon="search"
          variant="secondary"
          text={text}
          disabled={disabled}
          active={active}
          hovered={hovered}
        />
      ))}
    </FlexDiv>
  </>
);
