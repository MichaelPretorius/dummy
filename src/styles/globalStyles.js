import { createGlobalStyle } from 'styled-components';
import { below } from './elements/utils';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,600&display=swap');

  html {
    height: 100%;
    width: 100%;
    font-size: 20px;
    ${below.sm`
      font-size: 18px;
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
