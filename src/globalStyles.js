import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *, 
    *:before, 
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        background-color: rgb(218, 218, 218);
    }

    body {
        font-family: 'Roboto';
    }
`;

export default GlobalStyle;
