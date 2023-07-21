import { createGlobalStyle, styled } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border;
        font-family: Arial, Helvetica, sans-serif;
        text-decoration: none;
    }
    html, body {
        scroll-behavior: smooth;
    }
`


export const ContainerMain = styled.div`
    max-width: 1200px;
    margin: 0 auto;
   
`




export default GlobalStyle