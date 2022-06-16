import React, { Component } from "react";
import styled from "styled-components";

const Areaheader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: black;
  color: white;
  padding: 0px 40px;
`;
const Paragrafo = styled.p`
  font-size: 30px;
`;
const Lista = styled.ul`
  display: flex;
  list-style: none;
  gap: 16px;
  text-transform: uppercase;
`;

export default class Header extends Component {
  render() {
    return (
      <Areaheader>
        <Paragrafo>SpaceLab</Paragrafo>
        <nav>
          <Lista>
            <li onClick={this.props.onClickMenu1}>Home</li>
            <li onClick={this.props.onClickMenu2}>carrinho</li>
            <li onClick={this.props.onClickMenu3}>buscar</li>
            <li onClick={this.props.onClickMenu4}>Login</li>
          </Lista>
        </nav>
      </Areaheader>
    );
  }
}
