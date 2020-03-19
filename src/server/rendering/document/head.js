//* DEPs.
import serialize from "serialize-javascript";

const Head = (helmet, data, environment) =>
  `<head>
  ${Meta(helmet)}
  ${Preloads()}
  ${Scripts(data, environment)}
  ${StyleSheets()}
  <link rel="shortcut icon" href="/favicon.ico" />
</head>`;

const Meta = helmet => `
  ${helmet.title.toString()}
  ${helmet.meta.toString()}
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <meta name="theme-color" content="" />
`;

const PreConnects = () => ``;

const Preloads = () => `
  <link rel="preload" href="/vendor.chunk.js" as="script" importance="high" />
  <link rel="preload" href="/app.js" as="script" importance="high" />
  <link rel="preload" href="/styles.css" as="style" importance="high" />
`;

const Scripts = (data, environment) => ` 
  <script defer src="/vendor.chunk.js"></script>
  <script defer src="/app.js"></script>
  <script defer type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=&libraries=places"></script>
  <script id="initialData">
    window.__GEP_COMPOSITION_DTA__ = ${serialize(data)};
  </script>
`;

const StyleSheets = () => `
  <link rel="stylesheet" href="/styles.css" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" /> 
  <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
 
`;

export default Head;
