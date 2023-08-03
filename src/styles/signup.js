import styled from 'styled-components'

export const Container = styled.div`
  background-color: #eee;
`
export const TitleContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
    padding-bottom: 2rem;
`

export const Title = styled.h1`
    font-size: 3.5rem;
    color: #333;
    letter-spacing: 2px;
    font-weight: 500;
`

export const Subtitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 400;
    color: #222;
    margin-top: .8rem;
    letter-spacing: 1px;
`

export const Form = styled.div`
    padding: 1rem;
    margin: 0 auto;
`

export const FormControl = styled.div``

export const Wrapper = styled.form`
    max-width: 870px;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, .7);
    padding: 1rem;
`

export const Input = styled.input`
    width: 80%;
    padding: 1.3rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #888888cc;
    background: transparent;
    margin: 1rem;
    font-size: 1.1rem;

    &::placeholder {
        font-size: 1.4rem;
        color: #888888cc; 
    }
    &:focus {
        border-bottom: 3px solid #444;
    }
    &:focus::placeholder {
        color: #333;
        font-size: 1.2rem;
        margin-bottom: .7rem;
        transition: all .3s ease-in-out;
        transform: translateY(-22px);
    }
    border: ${({ contactInput }) => contactInput ? '1px solid #888888cc' : null};
    border-radius: ${({ contactInput }) => contactInput ? '5px' : null};
`

export const FormHelpText = styled.div`

`

export const Button = styled.button`
    padding: 1rem;
    border-radius: 8px;
    background-color: #111111cc;
    color: #fff;
    font-size: 1.3rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: right;
    width: 230px;
    border: none;
    transition: all .4s;

    &:hover {
        background-color: #333333cc;
    }
`

export const WrapperBtn = styled.form`
    max-width: 870px;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: none;    
`