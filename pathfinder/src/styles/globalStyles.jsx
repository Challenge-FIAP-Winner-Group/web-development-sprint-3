import { createGlobalStyle } from "styled-components";
import { mainBgColor } from "./colors";

export const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
        background-color: ${mainBgColor};
        font-size: 1rem;
    }
`;