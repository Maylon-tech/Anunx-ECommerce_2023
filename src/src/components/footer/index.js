import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 200px;
    margin: 4rem auto 0 auto;
    background-color: #fff;
    border-top: 1px solid gray;
    padding-top: 4rem;
    
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
`

export const GridItems = styled.div`
    padding: 1.4rem;
`

export const ItemContent = styled.span`
    font-size: 1.5rem;
    font-weight: 400;
    color: #555;
    cursor: pointer;
    padding: 1rem;
`


export const Continer = styled.div``