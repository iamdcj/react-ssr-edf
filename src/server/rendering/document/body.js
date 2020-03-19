const Body = markup => `
  <body>
    ${noScriptNotice()}
    <main id="root">${markup}</main>
    <div id="modal-root"></div>
  </body>
`;

const noScriptNotice = () => `
  <noscript class="notification  notification--inline">
    <div class="notification__inner">
      <span class="icon"><i class="fa-icon  fas  fa-exclamation-circle"></i></span>
      <p class="notification__description">
        Please <a href="https://www.enable-javascript.com/"  target="_blank" rel="noopener">enable JavaScript</a> to activate all application features.
      </p>
    </div>
  </noscript>
`;

export default Body;
