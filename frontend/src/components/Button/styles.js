import styled from "styled-components";

export const Button = styled.button`
  height: 60px;
    border: 2px solid black;
    border-radius: 20px;
    font-size: 35px;
    background-color: rgb(213, 209, 209);

    &:hover{
      cursor: pointer;
      background-color: rgb(119, 117, 117);
      transition: all 0.2s;
    }
`;
