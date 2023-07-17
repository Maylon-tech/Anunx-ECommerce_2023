import styled from 'styled-components';

export const Nav = styled.div`
    background-color: #111111cc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 80px;
    color: #fff;

    div {
        font-size: 2rem;
    }

    ul {
        display: flex;
        gap: 1rem;
        list-style: none;

        li {
            padding: 1rem;

            a {
                color: #fff;
                text-decoration: none;
                font-size: 1.3rem;
                font-weight: 500;
            }
        }
    }
`
     