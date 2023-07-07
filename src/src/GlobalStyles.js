import { createGlobalStyle, styled } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border;
        font-family: Arial, Helvetica, sans-serif;
    }
    html, body {
        scroll-behavior: smooth;
    }
`


export const Container = styled.div`
    max-width: 980px;
    margin: 0 auto;
    border: 3px solid crimson;
    height: 90vh;
`
export const Title = styled.h1`
    font-size: 2.4rem;
    color: #222;
    text-align: center;
    margin-top: 2rem;
`
export const PublicarBtn = styled.button`
    background-color: #222;
    color: #fff;
    border-radius: 8px;
    padding: 1rem;
    cursor: pointer;
    border: none;
    display: block;
    margin: auto;
    font-size: 1.2rem;
`








export default GlobalStyle