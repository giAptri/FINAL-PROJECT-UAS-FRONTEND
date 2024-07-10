import styled from 'styled-components';

export const Kotak = styled.div`
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 30px;
    max-width: 600px;
    margin: 20px auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 768px) {
        max-width: 700px;
    }

    @media (min-width: 992px) {
        max-width: 800px;
    }
    `;

    export const Cardd = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
    }
    `;

    export const Item = styled.div`
    text-align: center;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 10px 0;

    @media (min-width: 768px) {
        margin: 0 10px;
    }
    `;

    export const Title = styled.h1`
    font-family: Arial, sans-serif;
    font-size: 1.5em;
    color: #ec4899;
    margin: 0;
    `;

    export const Confirmed = styled.p`
    font-family: Arial, sans-serif;
    font-size: 1.5em;
    color: #2391eb;
    margin: 0;
    `;

    export const Death = styled.p`
    font-family: Arial, sans-serif;
    font-size: 1.5em;
    color: #da0d0d;
    margin: 0;
    `;

    export const Recovered = styled.p`
    font-family: Arial, sans-serif;
    font-size: 1.5em;
    color: #12be46;
    margin: 0;
    `;

    export const Contendate = styled.p`
    font-family: Arial, sans-serif;
    font-size: 1.3em;
    color: #555;
    margin: 0;
    `;
