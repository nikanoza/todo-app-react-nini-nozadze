import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Josefin', sans-serif;
    min-width: 100vw;
    min-height: 100vh;
    background-color: ${({ isDarkMode }) => (isDarkMode ? "#25273c" : "rgb(247, 247, 247)")};
    display: flex;
    justify-content: center;
    background-image: ${({ isDarkMode }) => (isDarkMode ? "url('/darkImg.svg')" : "url('/backImg.svg')")};
    background-position: top;
    background-repeat: no-repeat;
  }



  @media (min-width: 1440px) {
    body {
    align-items:center;
    background-image: ${({ isDarkMode }) => (isDarkMode ? "url('/dark.svg')" : "url('/mountains.svg')")};
    }
  }
`;

export default GlobalStyles;
