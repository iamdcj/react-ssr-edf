import React from "react";
import { Helmet } from "react-helmet";

const Head = ({
  description = "",
  locale = "",
  uri: url = "",
  root = "",
  lang = "en",
  message = "",
  canonical = "",
  keywords = "",
  title = `${message}`,
  ogInfo = {}
}) => {
  let og = {
    url,
    locale,
    ...ogInfo
  };

  canonical = root + canonical;
  og = Object.entries(og);

  return (
    <Helmet>
      <html lang={`${lang ? lang : "en"}`} />
      <title>{`${title ? `${title} | GEA` : "GEA"}`}</title>
      <meta name="description" content={description ? description : "GEA"} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {og?.length > 0 &&
        og.map(([key, value]) => (
          <meta key={key} property={`og:${key}`} content={value} />
        ))}
    </Helmet>
  );
};

export default Head;
