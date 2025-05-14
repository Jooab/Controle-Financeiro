import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0c5893;
    color: #fff;
    width: 50%;
    padding: 0.3rem;
    border-radius: 0.5rem;

    h1 {
        font-size: 1.5rem;

        @media (max-width: 450px) {
            font-size: 1rem;
            text-align: center;
            padding: 0.3rem;
        }
    }
`;