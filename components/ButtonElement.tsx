import styled from 'styled-components';
import Link from 'next/link';

interface Button{
    primary: number
    dark: number
    dark2: number
    exact: string
}

export const Button = styled(Link)<Button>`
    border-radius: 50px;
    width: 150px;
    height: 50px;
    font-weight: bold;
    background: ${({primary}) => (primary ? '#00d9ff' : '#010606')};
    white-space: nowrap;
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s ease-in-out;

    &:hover{
        transition: all .2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#00d9ff')};
    }
`