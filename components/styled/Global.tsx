import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body{
        width: 100%;
        height: 100%;
        margin: 0px;
        color: rgb(38, 38, 38);
        font-size: 16px;
        font-family: Averta, helvetica, arial, sans-serif;
        text-size-adjust: none;
        -webkit-font-smoothing: antialiased;
        background-color: ${({ theme }) => theme.colors.body};
    }
    .visuallyhidden{
        display: none
    }
`

export default GlobalStyles
