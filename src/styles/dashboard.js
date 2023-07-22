import styled from 'styled-components'

export const Container = styled.div`
    
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
    grid-gap: 1.5rem;
    place-items: center;
    max-width: 1160px;
    margin: 3rem auto;
`

// export const CardActions = styled.div``

export const ButtonEdit = styled.div`
    background-color: blueviolet;
    padding: .4rem;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    width: 100px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    > svg {
        color: #fff;
        font-size: 1.3rem;
    }
`

export const ButtonRemove = styled.div`
    background-color: crimson;
    padding: .4rem;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    width: 100px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    > svg {
        color: #fff;
        font-size: 1.3rem;
    }
`