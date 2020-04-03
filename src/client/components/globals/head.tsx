import React from "react";
import { Helmet } from "react-helmet";

const Head = ({
  description = "",
  language = "",
  canonical_url = "",
  title = "React SSR EDF Starter",
  ...rest
}) => (
  <Helmet>
    <html lang={language} />
    <title>{title}</title>
    <meta name="description" content={description} />
    {canonical_url && <link rel="canonical" href={canonical_url} />}
    {Object.entries(rest).map(([key, value]) => (
      <meta key={key} property={key} content={value} />
    ))}
  </Helmet>
);

export default Head;
