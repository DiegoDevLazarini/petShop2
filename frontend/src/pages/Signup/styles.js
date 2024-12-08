import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 84.8vh;
  background-color: rgb(117, 116, 116);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 500px;
`;

export const Label = styled.label`
  text-align: center;
  font-size: 50px;
  margin-bottom: 20px;
  color: black;
`;

export const LabelSignin = styled.label`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 20px;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: rgb(213, 209, 209);

    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
