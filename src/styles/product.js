import styled from 'styled-components'

export const Container = styled.div`
    background-color: #eee;
`
export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 650px 350px;
    grid-gap: 1.5rem;
    justify-content: center;
    padding: 3rem 0;
`

/*  Left Container  */

export const GridLeft = styled.div`

`

export const BoxContainer = styled.div`
    background-color: #ffff;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 5px;

    .swiper-container {
        display: flex;
       
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`

/* Price Box  */

export const DateContent = styled.span`
    color: #444;
    padding: 1rem;
`

export const ProductName = styled.h1`
    color: #222222cc;
    margin: .7rem 0;
`

export const PriceContent = styled.h3`
    color: #333;
    font-weight: bold;
    font-size: 1.8rem;
    margin-bottom: 2rem;
`

export const ChipCategory = styled.span`
    color: #555;
    padding: .4rem;
    border-radius: 15px;
    background-color: lightgray;
    font-size: .8rem;
`

/*  Descriptoin Box  */


export const LabelDesc = styled.h2`
    color: #333333;
    font-size: 1.3rem;
    font-weight: 600;
    padding: 1rem;
`

export const ParagDesc = styled.p`
    color: #444444cc;
    font-size: 1rem;
    padding: 1rem;
`


/*  Right Container  */
export const GridRight = styled.div`
   
`

export const ProfileContainer = styled.div`
    display: flex;
    gap: 1.4rem;
    align-items: center;
    justify-content: center;
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
    color: #444;
    font-size: 1.2rem;
`

export const ProfileEmail = styled.span`
    color: #555555cc;
    padding: .3rem;
`