import styled from 'styled-components'

export const Container = styled.div`
  

`


export const Title = styled.h1`
    font-size: 2.3rem;
    text-align: center;
    padding: 1.7rem;
    font-weight: 500;
    color: #333;
`

export const SearchContainer = styled.div`
    max-width: 720px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, .6);

     svg {
        color: #777;
        font-size: 2rem;
        position: absolute;
        right: 30px;
        top:10px;
     }
`



export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 2rem;
    place-items: center;
    max-width: 1160px;
    margin: 0 auto;
`