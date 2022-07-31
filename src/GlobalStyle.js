import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: none;
    font-family: 'Noto Sans KR', sans-serif;
    list-style: none;
    background-color: transparent;
  }

  button {
    cursor: pointer;
  }

  body {
    background-color: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  section {
    margin: 30px 0;
  }

  .App {
    min-height: 100vh;
    padding: 0 20px;
    max-width: 1200px;
    min-width: 800px;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  }


`;
export default GlobalStyle