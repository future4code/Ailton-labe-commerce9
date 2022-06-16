import React, { Component } from "react";
import styled from "styled-components";
import BannerDois from "../img/banner-img.jpg";
import Carrinho from "../img/Carrinho.png";

const BannerUm = styled.div`
  background-image: url(${BannerDois});
  background-repeat: no-repeat;
  background-attachment: inherit;
  height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 0;
    color: white;
    text-shadow: 3px 2px black;
  }
`;
const Areacards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  background: #c1c0c5;
  gap: 40px;
  padding: 40px;
  p {
    display: flex;
    text-align: center;
    align-items: center;
  }
`;
const Card = styled.div`
  width: 400px;
  /* height: 500px; */
  padding: 16px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 4px;
  h3,
  h4 {
    margin: 4px;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;
const Camisetas = styled.img`
  width: 90%;
`;
const AdicionarCarrinho = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 12px;
  padding: 3px 8px;
  font-size: 18px;
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
  font-family: "Roboto", sans-serif;
  img {
    width: 24px;
  }
`;
const ContainerAreaCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #c1c0c5;
`;

export const Banner = (props) => {
  return <BannerUm>{props.bemVindo && props.bemVindo}</BannerUm>;
};

export const Cards = (props) => {
  let cont = 0;
  const arrayCards = props.produtos.map((item, index) => {
    if (index >= props.inicio && cont < 3) {
      cont++;
      return (
        <Card key={item.id}>
          <Camisetas src={item.foto} alt=""></Camisetas>
          <h3>{item.nomeProduto}</h3>
          <h4>R${item.preco},00</h4>
          <AdicionarCarrinho
            onClick={() => {
              props.adicionarNoCarrinho(item.id);
            }}
          >
            <p>Adicionar ao carrinho</p>
            <img src={Carrinho} alt=""></img>
          </AdicionarCarrinho>
        </Card>
      );
    }
  });
  return arrayCards;
};

export const SectionsMain = (props) => {
  return (
    <>
      <Banner bemVindo={<h1>Bem-vindo a SpaceLab</h1>} />
      <ContainerAreaCards>
        <h2>Produtos</h2>
        <Areacards>
          <Cards
            adicionarNoCarrinho={props.adicionarNoCarrinho}
            produtos={props.produtos}
            inicio={0}
          />
        </Areacards>
      </ContainerAreaCards>
      <Banner />
      <ContainerAreaCards>
        <h2>Produtos</h2>
        <Areacards>
          <Cards
            adicionarNoCarrinho={props.adicionarNoCarrinho}
            produtos={props.produtos}
            inicio={3}
          />
        </Areacards>
      </ContainerAreaCards>
    </>
  );
};

export class Main extends Component {
  render() {
    return (
      <div>
        <SectionsMain
          produtos={this.props.valoresProdutos}
          adicionarNoCarrinho={this.props.adicionarNoCarrinho}
        />
      </div>
    );
  }
}
