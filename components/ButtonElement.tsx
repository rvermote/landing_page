import styled from 'styled-components';
import {Link} from 'react-scroll';

interface Button{
    primary: number
    dark: number
    dark2: number
    exact: string
}

export const Button = styled(Link)<Button>`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#00d9ff' : '#010606')};
    white-space: nowrap;
    padding: '14px 48px';
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: '20px';
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