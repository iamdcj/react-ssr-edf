import React from "react";
import Icon from "./Icon";

export default { title: "Styleguide/Icons" };

const logos = [
  {
    name: "logo",
    color: "",
    width: "100"
  },
  {
    name: "logo",
    color: "#878787",
    width: "100"
  },
  {
    name: "logo",
    background: "#465055",
    color: "#fff",
    width: "100"
  },
  {
    name: "search",
    color: "#0096dc",
    width: "50"
  }
];

export const All = () => {
  return (
    <div
      style={{
        display: "grid",
        gap: "10px",
        alignItems: "center",
        gridTemplateColumns: "repeat(auto-fill, minmax(min-content, 100px))"
      }}
    >
      {logos.map(({ name, color, width, background = "#fff" }, i) => (
        <div
          key={i}
          style={{
            background,
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <Icon name={name} width={width} color={color} />
        </div>
      ))}
    </div>
  );
};
