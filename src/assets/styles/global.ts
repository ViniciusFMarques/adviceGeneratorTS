import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
  }

  html{
    font-size: 28px;
  }

  body{
    background-color: ${({theme}) => theme.colors.neutral.darkBlue};
  }

  button{
    cursor: pointer;
  }
`
