const ErrorUI = (
  title = "Something went wrong",
  message = "Sorry about this, please try again later."
) =>
  `<!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico">
        <style>
        </style>
      </head>
      <body>
        <header>
        </header>
        <main>
          <h1>${title}</h1>
          <p>${message}</p>
        </main>
      </body>
    </html>`;

export default ErrorUI;
