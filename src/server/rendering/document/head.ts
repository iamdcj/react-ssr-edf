//* DEPs.
import serialize from "serialize-javascript";

import { Head } from "../../../_types";

const HTMLHead = ({ helmet, data, scriptTags, styles }: Head) =>
  `<head>
    ${Meta(helmet)}
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="manifest" href="/manifest.json">
    ${Scripts(data, scriptTags)}
    ${StyleSheets(styles)}
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

const StyleSheets = ({
  styleIDs,
  stylesheet
}: {
  styleIDs: string[];
  stylesheet: string;
}) => `<style data-emotion-css="${styleIDs.join(" ")}">${stylesheet}</style>`;

export default HTMLHead;
