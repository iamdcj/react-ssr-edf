//* DEPs.
import serialize from "serialize-javascript";

const Head = (helmet, data, scripts) =>
  `<head>
    ${Meta(helmet)}
    ${Preloads()}
    ${Scripts(data, scripts)}
    ${StyleSheets()}
    <link rel="shortcut icon" href="/favicon.ico" />
  </head>
`;

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
`;

const Scripts = (data, scripts) => ` 
  ${scripts}
  <script id="initialData">
    window.__GEP_COMPOSITION_DTA__ = ${serialize(data)};
  </script>
`;

const StyleSheets = () => ``;

export default Head;
