export default (
  title = "Something went wrong",
  message = "Sorry about this, please try again later."
) =>
  `<!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico">
        <style>
          p, h1 { 
            margin: 0 0 18px
          }

          h1 {
            font-size: 30px;
            font-weight: 600;
          }

          body {
            height: 100vh;
            overflow: hidden;
            background: #2150a1; 
          }

          body,
          main {
            display: flex; 
            justify-content: center; 
            align-items: center;
            flex-direction: column; 
            color: #fff; 
            font-family: 'Open Sans', 'Arial', sans-serif;
          }

          header {
            margin-bottom: 18px;
          }

        </style>
      </head>
      <body>
        <header>
          <svg width="300" height="67.5" viewBox="0 0 220.62 42.9"><path fill="#fff" d="M21.45 33.91a12.46 12.46 0 1 1 12.46-12.46 12.46 12.46 0 0 1-12.46 12.46m0 9A21.45 21.45 0 1 0 0 21.45 21.45 21.45 0 0 0 21.45 42.9m139.11 0A21.45 21.45 0 1 1 182 21.45a21.45 21.45 0 0 1-21.44 21.45m0-9a12.46 12.46 0 1 0-12.46-12.45 12.46 12.46 0 0 0 12.46 12.46M47.6 1.3v40.58h9V8.78h9.81v33.1h9V8.78h3.47a6.33 6.33 0 0 1 6.33 6.33v26.77h9V15.32A14.3 14.3 0 0 0 79.87 1H56.62q-4.55 0-9.02.3zm138.7 0v40.58h9V8.78h10a6.33 6.33 0 0 1 6.33 6.33v26.77h9V15.32A14.3 14.3 0 0 0 206.32 1h-11c-3.06 0-6.05.12-9.02.3zm-85.18 0v40.58h9V8.78h10.62a6.33 6.33 0 1 1 0 12.66H113l13.89 20.43h11l-10-14.7A13 13 0 0 0 136 15.12 14.1 14.1 0 0 0 122 1h-11.9q-4.53 0-8.98.3z" /></svg>
        </header>
        <main>
          <h1>${title}</h1>
          <p>${message}</p>
        </main>
      </body>
    </html>`;
