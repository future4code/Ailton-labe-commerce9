import React, { Component } from "react";
import styled from "styled-components";

const AreaHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: black;
  color: white;
  @media screen and (max-width: 480px) {
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Nav = styled.nav`
  margin: 0 20px;
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Lista = styled.ul`
  display: flex;
  list-style: none;
  gap: 16px;
  text-transform: uppercase;
  user-select: none;
  cursor: pointer;
  li:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

const Logo = styled.p`
  font-style: italic;
  font-size: 32px;
  font-weight: 700;
  background-color: red;
  user-select: none;
  margin: 0 20px;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    font-size: 28px;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-top: 12px;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <AreaHeader>
        <Logo onClick={this.props.onClickMenu1}>SpaceLab</Logo>
        <Nav>
          <Lista>
            <li onClick={this.props.onClickMenu1}>Home</li>
            <li onClick={this.props.onClickMenu2}>Carrinho</li>
            <li onClick={this.props.onClickMenu3}>Buscar</li>
            <li onClick={this.props.onClickMenu4}>Login</li>
          </Lista>
        </Nav>
      </AreaHeader>
    );
  }
}
