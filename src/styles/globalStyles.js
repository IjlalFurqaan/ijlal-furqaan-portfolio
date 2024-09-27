// src/styles/globalStyles.js
import { css } from '@emotion/react';

const globalStyles = (theme) => css`
  /* Global Styles */

  /* Reset CSS */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Base Styles */
  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.fonts.body};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    margin: 0;
    color: ${theme.colors.text};
  }

  /* Links */
  a {
    color: ${theme.colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Utility Classes */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

export default globalStyles;
