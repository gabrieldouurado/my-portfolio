import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['gray-900']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto Mono', monospace;
    font-weight: 400;
    font-size: 1rem;
  }

`
