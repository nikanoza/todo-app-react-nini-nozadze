import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
 body{
    font-family: 'Josefin', sans-serif;
    min-width: 100vw;
    min-height: 100vh;
    background: var(--Dark-Blue, #7d889b);
     display: flex;
    justify-content: center;
    }
 

`;
export default GlobalStyles;
