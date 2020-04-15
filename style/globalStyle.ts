import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
${reset}
body{
    min-height: 100vh;
    line-height:1.2;
    margin:0px;
}
li{
    list-style-type: disc;
    list-style-position:inside;
}
`;

export default GlobalStyles;
