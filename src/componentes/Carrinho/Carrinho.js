import React, { Component } from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c1c0c5;
  flex-direction: column;
  padding: 20px 0;
`;

const ContainerList = styled.div`
  width: 600px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

const CardBox = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: 112px 240px 80px;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  box-shadow: 0 0 4px black;
  img {
    height: 100px;
  }
  button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    &:hover {
      background-color: #999;
    }
  }
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

const DivQnt = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 0;
`;

const QntP = styled.p`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 0;
`;

const AddRm = styled.p`
  font-size: 20px;
  box-shadow: 0 0 8px gray;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  padding: 0;
  padding-bottom: 4px;
  user-select: none;
  :hover {
    background-color: #c1c0c5;
  }
  :active {
    background-color: gray;
    border-radius: 8px;
  }
`;

const ContainerPrecoTotal = styled.div`
  background-color: black;
  margin: 4px 0;
  color: white;
  border: 1px solid gray;
  width: 600px;
  display: flex;
  justify-content: end;
  align-items: flex-end;
  flex-direction: column;
  p {
    margin-right: 12px;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

export const ProdutoAdicionado = (props) => {
  const arrayProdutos = props.carrinho.map((item, index) => {
    return (
      <CardBox key={index}>
        <img src={item.foto} alt="foto" />
        <div>
          <p>{item.nomeProduto}</p>
          <DivQnt>
            <QntP>Quantidade: </QntP>
            <AddRm
              onClick={() => {
                props.Remover(index);
              }}
            >
              {" "}
              -{" "}
            </AddRm>
            <QntP>{props.carrinhoQnt[item.id]}</QntP>
            <AddRm
              onClick={() => {
                props.adicionarNoCarrinho(item.id);
              }}
            >
              {" "}
              +{" "}
            </AddRm>
          </DivQnt>

          <p>R${item.preco},00</p>
        </div>
        <button
          onClick={() => {
            props.RemoverTudo(index);
          }}
        >
          Remover Tudo {`(${props.carrinhoQnt[item.id]})`}
        </button>
      </CardBox>
    );
  });
  return arrayProdutos;
};

export default class Carrinho extends Component {
  render() {
    const carrinhoSoma = this.props.carrinho.map((item) => {
      return item.preco * this.props.carrinhoQnt[item.id];
    });
    let soma = 0;
    for (const item of carrinhoSoma) {
      soma += item;
    }
    return (
      <>
        <ContainerCarrinho>
          <ContainerList>
            <ProdutoAdicionado
              adicionarNoCarrinho={this.props.adicionarNoCarrinho}
              carrinho={this.props.carrinho}
              carrinhoQnt={this.props.carrinhoQnt}
              Remover={this.props.Remover}
              RemoverTudo={this.props.RemoverTudo}
            />
          </ContainerList>
          <ContainerPrecoTotal>
            <p>Valor total: R${soma},00</p>
          </ContainerPrecoTotal>
        </ContainerCarrinho>
      </>
    );
  }
}
