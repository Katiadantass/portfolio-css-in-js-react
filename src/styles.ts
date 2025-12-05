import { createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    background: #f5f5f5;
    color: #222;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default EstiloGlobal;
