import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;

`

export const SearchContainer = styled.div`
    max-width: 720px;
    width: 100%;
    margin: 3rem auto;
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

export const InputSearch = styled.input`
    padding: 1.2rem;
    width: 95%;
    border-radius: 5px;
    position: relative;
    border: none;
    outline: none;
    font-size: 1.2rem;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 2rem;
    place-items: center;
    max-width: 1160px;
    margin: 0 auto;
    background-color: #eee;
    padding: 2rem 1.3rem;
`