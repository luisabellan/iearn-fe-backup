import colors from "constants/colors";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Mulish', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${colors.lightBlue};
  }

  *, *::after, *::before {
    border: inherit;
  }
`;

export default GlobalStyle;
