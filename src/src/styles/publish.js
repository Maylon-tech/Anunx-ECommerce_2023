import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #eee;
`

export const Title = styled.h1`
    font-size: 2.7rem;
    font-weight: bold;
    text-align: center;
    padding: 2rem 0;
    color: #333;
`

export const SubTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: 2px;
    color: #333;
    text-align: center;
`

export const FormContainer = styled.div`
    padding: 1rem;
    margin-top: 1.5rem;
    max-width: 870px;
    margin: 1rem auto;
`

export const Wrapper = styled.form`
    max-width: 870px;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, .7);

    > h4 {
        font-size: 1rem;
        font-weight: 400;
        margin-left: 1rem;
    }
    padding: 1rem;


`

export const Label = styled.label`
    font-size: 1.3rem;
    font-weight: 700;
    color: #555;
    padding: 1rem;
`

export const Input = styled.input`
    padding: 1.3rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #888888cc;
    background: transparent;
    margin: 1rem;
    font-size: 1.1rem;

    &::placeholder {
        font-size: 1.4rem;
        color: lightgray; 
    }

    border: ${({ contactInput }) => contactInput ? '1px solid #888888cc' : null};
    border-radius: ${({ contactInput }) => contactInput ? '5px' : null};
`

export const Select = styled.select`
    padding: 1rem;
    border: none;
    outline: none;
    background: transparent;

    font-size: 1.2rem;

`

export const TextField = styled.textarea`
    padding: 1.2rem;
    border-radius: 5px;
    border: 1px solid gray;
    height: 100px;
    margin: .7rem 0;
    outline: none;
    resize: none;
    margin: 1rem;
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