import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  html {
    background: linear-gradient(
      90deg,
      rgba(48, 16, 255, 0.6) 0%,
      rgba(100, 115, 255, 0.6) 100%
    );
  }
`;
