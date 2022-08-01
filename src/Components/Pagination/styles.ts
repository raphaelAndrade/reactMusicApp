import styled from 'styled-components';

export const Container = styled.ul`
    list-style: none;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    align-items: center;
    justify-content: center;
    grid-gap: 24px;
`

export const PageItem = styled.li``

export const Link = styled.a`
    text-decoration: none;
    color: gray;

    :hover {
        color: blue; 
    }
`