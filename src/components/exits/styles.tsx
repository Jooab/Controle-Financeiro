import styled from "styled-components";
import { RiDeleteBin6Fill } from "react-icons/ri";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color: #1284df;
  color: #fff;
`;

export const ThDescription = styled.th`
  text-align: left;
  padding: 0.5rem;
`;

export const ThValue = styled.th`
  text-align: right;
  padding: 0.5rem;
`;

export const Title = styled.h1`
  text-align: center;
  background-color: #0c5893;
  color: #fff;
  border-radius: 0.3rem 0.3rem 0 0;

  @media (max-width: 450px) {
    font-size: 1.6rem;
  }
`;

export const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  justify-content: space-between;
  

  input {
    padding: 0.5rem;
    border: 1px solid #ffffff;
    border-radius: 0.3rem;

    &:hover {
     border: 1px solid #1284df;   
    }

    @media (max-width: 542px) {
      width: 30%;
      font-size: 0.7rem;
    }
  }


  button {
    padding: 0.5rem;
    border-radius: 0.3rem;
    border: none;
    background-color: #1284df;
    color: #fff;
    margin-left: 0.5rem;
    transition: all 0.4s ease-in-out;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }

    @media (max-width: 450px) {
      font-size: 0.7rem;
      padding: 0.3rem;
    }
  }
`;

export const ExitsTotalValue = styled.div`
    background-color: #dbeef5;
    padding: 0.5rem;
    border-radius: 0 0 0.3rem 0.3rem;
    font-size: 0.9rem;
    color: #0c5893;
    font-weight: bold;

    @media (max-width: 450px) {
      font-size: 0.8rem;
    }
`

export const ExitsList = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #dbeef5;
    padding: 0.5rem;

    p {
    text-transform: capitalize;

    @media (max-width: 450px) {
      font-size: 0.8rem;
    }

`

export const DeleteButton = styled(RiDeleteBin6Fill)`
    cursor: pointer;
    color: #939393;
    transition: all 0.3s ease-in-out;

    &:hover {
       transform: scale(1.1);
    }
`
