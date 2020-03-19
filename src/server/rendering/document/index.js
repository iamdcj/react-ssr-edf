import Head from "./head";
import Body from "./body";

const Document = (helmet, markup, data, extractor) => {
  const scripts = extractor.getScriptTags();

  return `<!DOCTYPE html>
    <html class="no-js" ${helmet.htmlAttributes.toString()}>
      ${Head(helmet, data, scripts)}
      ${Body(markup)}
    <script>
      document.documentElement.classList.remove('no-js');
      document.documentElement.classList.add('js');
    </script>
  </html>`;
};

export default Document;
