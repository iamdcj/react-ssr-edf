//* DEPs.
import serialize from "serialize-javascript";

import { Head } from "../../../_types";

const Head = ({ helmet, data, scriptTags, styleTags }: Head) =>
  `<head>
    ${Meta(helmet)}
    ${Scripts(data, scriptTags)}
    ${StyleSheets(styleTags)}
    <link rel="shortcut icon" href="/favicon.ico" />
  </head>
`;

const Meta = (helmet: any) => `
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <meta name="theme-color" content="" />
  ${helmet.title.toString()}
  ${helmet.meta.toString()}
`;

const Scripts = (data: JSON, scripts: string) => ` 
  ${scripts}
  <script id="initialData">
    window.__GEP_COMPOSITION_DTA__ = ${serialize(data)};
  </script>
`;

const StyleSheets = (styleTags: string) => `${styleTags}`;

export default Head;
