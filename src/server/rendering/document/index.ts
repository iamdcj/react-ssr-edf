import HTMLHead from "./head";
import HTMLBody from "./body";
import { Document } from "../../../_types";

const HTML = ({ markup, helmet, ...rest }: Document) => `
  <!DOCTYPE html>
  <html class="no-js" ${helmet.htmlAttributes.toString()}>
      ${HTMLHead({ helmet, ...rest })}
      ${HTMLBody(markup)}
    <script>
      document.documentElement.classList.remove('no-js');
      document.documentElement.classList.add('js');
    </script>
  </html>`;

export default HTML;
