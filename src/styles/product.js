import styled from 'styled-components'

export const Container = styled.div`
    background-color: #eee;
    height: 100vh;
    border: 3px solid red;
`
export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 650px 250px;
    grid-gap: 1.5rem;
    justify-content: center;
    border: 3px solid red;
    
    border: 3px solid blue;

`

/*  Left Container  */

export const GridLeft = styled.div`
   border: 2px solid purple;
`

export const BoxContainer = styled.div`
    background-color: #ffff;
    height: 100px;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 5px;
    border: 2px solid orange;
`

/* Price Box  */

export const DateContent = styled.span`
    color: lightgreen;
`

export const ProductName = styled.h1`
    color: crimson;
`

export const PriceContent = styled.h3`
    color: green;
`

export const ChipCategory = styled.span`
    color: blue;
`

/*  Descriptoin Box  */


export const LabelDesc = styled.h2`
    color: greenyellow;
`

export const ParagDesc = styled.p`
    color: cyan;
`


/*  Right Container  */
export const GridRight = styled.div`
    border: 2px solid black;
`

export const ProfileContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-evenly;
`

export const Avatar = styled.img`
    border: 1px solid black;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: block;
`

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const ProfileName = styled.h3`
    color: blueviolet;
`

export const ProfileEmail = styled.span`
    color: crimson;
`