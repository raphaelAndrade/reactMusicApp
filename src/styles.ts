import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-auto-rows: max-content;
    grid-gap: 24px;
    align-content: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;

    h1 {
        text-align: center;
        margin: 0;
    }
`
export const LoadingContainer = styled.div`
    display: grid;
    height: 600px;
    place-items: center;

    h2 {
        text-align: center;
        margin: 0;
    }
`