import styled from 'styled-components'


export const Container = styled.div`
    max-width: 1360px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: #333;
`


export const Nav = styled.nav`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    height: 75px;
    color: #fff;

`

/*  Left side of Menu  */ 
export const LeftHeader = styled.div`
    flex: 1;

`

export const Logo = styled.div`
    flex: 1;
    padding: 1rem;

    a {
        text-decoration: none;
        font-size: 1.8rem;
        text-transform: uppercase;
        color: #eee;
        font-weight: bold;
    }
`

/*  Right side of Menu  */ 

export const RightHeader = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
`


/*  Button direcionar para Login e Registro  */

export const ButtonAction = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 1.4rem;
    border: 2px solid lightgray;
    padding: .4rem;
    border-radius: 3px;
    cursor: pointer;

    text-decoration: none;
    color: #eee;
`

/*  Menu Burger  */

export const IconButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    padding: .5rem;

    > svg {
        font-size: 1.8rem;
        color: #ccc;
    }
`

export const Avatar = styled.img`
    object-fit: cover;
`

export const AvatarPerson = styled.h3`
    font-size: 1.1rem;
    font-weight: 500;
`

/*  Menu DropDown  */

export const MenuDrop = styled.div`
    padding: 1rem;
    background-color: #333;
    position: absolute;
    top: 70px;
    right: 50px;
`

export const MenuItem = styled.div`
    margin: 1.2rem 0;
    cursor: pointer;

    &:hover {
        color: blue;
    }
`

export const DividerLine = styled.span`
    width: 100%;
    background-color: red;
    height: 2px;
    display: inline-block;
`

export const IconButt = styled.div``