import React from "react";
import { Global, css } from "@emotion/core";
import emotionNormalize from "emotion-normalize";

export const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        ${emotionNormalize}
      `}
    />
    <Global
      styles={css`
        :root {
          font-family: HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue,
            Helvetica, Arial, Lucida Grande, sans-serif;
        }

        html {
          box-sizing: border-box;
          height: 100%;
        }

        body {
          height: 100%;
        }

        #root {
          display: grid;
          height: 100%;
          grid-template-rows: max-content auto max-content;
        }

        p {
          line-height: 18px;
          margin: 0 0 18px;
        }

        .notification {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 100%;
          background: #e24059;
        }

        .notification__inner {
          text-align: center;
          padding: 30px 20px 18px 20px;
          color: #fff;
          max-width: 1200px;
        }

        .notification__inner a {
          color: #fff;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        ul {
          padding: 0;
          margin: 0;
        }
      `}
    />
  </>
);
