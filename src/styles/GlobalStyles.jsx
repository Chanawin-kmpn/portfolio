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



  body {
    color: #121212; 
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
  cursor: default;

  }
`;

export default GlobalStyles;
