import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
  }

  img,svg {
    display: block;
    max-width: 100%;
  }

  html {
    font-size: 1.125rem;
  }

  body {
    color: #121212; 
    font-family: 'JetBrains Mono', monospace;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyles;
