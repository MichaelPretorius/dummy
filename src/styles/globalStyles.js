import { createGlobalStyle } from 'styled-components';
import { below } from './elements/utils';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,600&display=swap');

  html {
    padding: 0;
    margin: 0;
    font-size: 18px;
    ${below.sm`
      font-size: 16px;
    `};
    font-family: 'Poppins', sans-serif;
  }

  body {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0 auto;
    list-style-type: none;
  }

  * {
    box-sizing: border-box;
  }
`;
