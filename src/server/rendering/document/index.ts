import Head from "./head";
import Body from "./body";
import { Document } from "../../../_types";

const Document = ({ markup, helmet, ...rest }: Document) => `
  <!DOCTYPE html>
  <html class="no-js" ${helmet.htmlAttributes.toString()}>
      ${Head({ helmet, ...rest })}
      ${Body(markup)}
    <script>
      document.documentElement.classList.remove('no-js');
      document.documentElement.classList.add('js');
    </script>
  </html>`;

export default Document;
