// src/styles/globalStyles.js
import { css } from '@emotion/react';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.fonts.body};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    margin-top: 0;
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;