import styled from "styled-components";

export const Input = styled.input`
  height: 60px;
  margin-bottom: 20px;
  border: 2px solid black;
  border-radius: 20px;
  outline: none;
  font-size: 25px;
  padding-left: 10px;
  background-color: rgb(213, 209, 209);

  &::placeHolder{
    font-size: 25px;
    color: black;
  }
`;