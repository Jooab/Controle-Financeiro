import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background-color: #0c5893;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default GlobalStyle;