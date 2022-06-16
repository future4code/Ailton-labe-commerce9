import React, { Component } from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContainerList = styled.div`

  width: 600px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  width: 100px;
}
button {
  padding: 10px;
  border: none;
  border-radius: 8px;
  &:hover{
    background-color: #999;
  }
}
`
const ContainerPrecoTotal = styled.div`
  background-color: black;
  color: white;
  border: 1px solid gray;
  width: 600px;
  display: flex;
  justify-content: end;
  align-items: flex-end;
  flex-direction: column;
  p{
    margin-right: 12px;
  }
`
export const ProdutoAdicionado = (props) => {

   const arrayProdutos = props.carrinho.map((item, index)=>{
    return (
      <CardBox key={index}>
        <img src={item.foto} alt="foto"/>
        <div>
          <p>{item.nomeProduto}</p>
          <p>R${item.preco},00</p>
        </div>
        <button onClick={() => {props.Remover(index)}}>Remover</button>
      </CardBox>
    )
   })
  return arrayProdutos;
};

export default class Carrinho extends Component {
  render() {
    console.log(this.props.carrinho);

    const precos = this.props.carrinho.map((item) =>{
      return item.preco
    })
    let soma = 0
    for(let i = 0; i<precos.length; i++){
      soma += precos[i]
    }
    return (
      <>
        <ContainerCarrinho>
          <ContainerList>
            <ProdutoAdicionado carrinho={this.props.carrinho}  Remover={this.props.Remover}/>    
          </ContainerList>
          <ContainerPrecoTotal>
            <p>Valor total: R${soma},00</p>
          </ContainerPrecoTotal>
        </ContainerCarrinho>
      </>
    );
  }
}
