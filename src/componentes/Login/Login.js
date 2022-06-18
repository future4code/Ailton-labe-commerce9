import React, { Component } from "react";
import styled from "styled-components";

const ContainerLogin = styled.div`
  background-color: #c1c0c5;
  display: flex;
  flex-direction: column;
  padding: 200px 0;
  justify-content: center;
  align-items: center;
  button {
    font-size: 17px;
    width: 120px;
  }
  @media screen and (max-width: 480px) {
    height: 46vh;
  }
`;
const CampoInput = styled.div`
  width: 300px;
  background-color: white;
  border: 1px gray solid;
  border-radius: 12px;
  box-shadow: 0 0 12px gray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  h2 {
    margin: 0;
  }
`;

const DivInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  width: 292px;
`;

export default class Login extends Component {
  render() {
    return (
      <ContainerLogin role="Caixa de login">
        <CampoInput>
          <h2>Login</h2>
          <DivInput>
            <label for="user">Usuário</label>
            <Input id="user" type="text" />
          </DivInput>
          <DivInput>
            <label for="password">Senha</label>
            <Input id="password" type="password" />
          </DivInput>
          <button>Logar</button>
        </CampoInput>
      </ContainerLogin>
    );
  }
}
