import React, { Component } from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerList = styled.div`
  border: 1px solid gray;
  width: 600px;
  min-height: 200px;
`;

export const ProdutoAdicionado = (props) => {
  // const arrayProdutos = props.carrinho.map(()=>{

  // })
  return <p></p>;
};

export default class Carrinho extends Component {
  render() {
    console.log(this.props.carrinho);
    return (
      <>
        <ContainerCarrinho>
          <ContainerList>
            <ProdutoAdicionado carrinho={this.props.carrinho} />
          </ContainerList>
        </ContainerCarrinho>
      </>
    );
  }
}
