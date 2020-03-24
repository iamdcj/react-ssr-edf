import React from "react";
import { Helmet } from "react-helmet";

const Head = ({
  description = "",
  language = "",
  canonical = "",
  keywords = "",
  title = "DEPT | React EDF start project"
}) => {
  return (
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

export default Head;
