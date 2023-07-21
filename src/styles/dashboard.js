import styled from 'styled-components'

export const Container = styled.div`
    border: 3px solid purple;
    height: 80vh;
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

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    max-width: 1160px;
    margin: 0 auto;
    border: 3px solid orangered;
`


// export const CardActions = styled.div``

export const ButtonEdit = styled.div``

export const ButtonRemove = styled.div``