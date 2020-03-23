import React from "react";
import BasicText from "./BasicText";

export default { title: "Basic Text" };

const data = {
  title: "Basic Text",
  text: "<p>Some text</p>"
};

export const Default = () => <BasicText {...data} />;

export const NoTitle = () => <BasicText text="<p>Some text</p>" />;

export const NoText = () => <BasicText title="Basic Text" />;
