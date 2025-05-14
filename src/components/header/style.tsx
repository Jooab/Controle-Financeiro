import styled from "styled-components";

export const Header = styled.header`
    color: #fff;
    text-align: center;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

export const Image = styled.img`
    width: 5rem;
    height: 5rem;
    margin-right: 0.5rem;
`;