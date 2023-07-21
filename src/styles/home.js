import styled from 'styled-components'


/*   ALL STYLING FROM HOME LAYOUTS     */


export const Container = styled.div`
  background-color: #fff;
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

export const InputSearch = styled.input`
    padding: 1.2rem;
    width: 95%;
    border-radius: 5px;
    position: relative;
    border: none;
    outline: none;
    font-size: 1.2rem;
`

/* Produtos do Home  */

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    max-width: 1160px;
    margin: 0 auto;
`

export const GridItem = styled.div`
    width: 300px;
    height: auto;
`

export const Card = styled.div`
    background-color: #eee;
    border-radius: 8px;
    box-shadow: 1px 2px 7px 1px rgba(0, 0, 0, .6);
`

export const CardTopImage = styled.img`
    width: 100%;
    height: 170px;
    object-fit: cover;
    border-radius: 8px;
`


export const CardContent = styled.div`
    padding: 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
export const ProductTitle = styled.h1`
    margin: .6rem 0;
    color: #444;
    font-size: 1.5rem;
`

export const Price = styled.div`
    color: #333;
    font-size: 1.2rem;
`