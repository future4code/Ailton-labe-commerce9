import React, { Component } from 'react'
import styled from 'styled-components'
import BannerDois from '../img/banner-img.jpg'
import Img from '../img/Camiseta1.jpg'
import Carrinho from '../img/Carrinho.png'

const BannerUm = styled.div`
  background-image: url(${BannerDois});
  background-repeat: no-repeat;
  background-attachment: inherit;
  background-color: yellow;
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
`
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
`
const Cards = styled.div`
  width: 400px;
  height: 500px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 4px;
`
const Camisetas = styled.img`
  width: 90%;
`
const AdicionarCarrinho = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 12px;
  padding: 3px 8px;
  font-size: 18px;
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  font-family: 'Roboto', sans-serif;
  img {
    width: 24px;
  }
`
const ContainerAreaCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #c1c0c5;
`

export const Banner = () => {
  return (
    <BannerUm>
      <h1>Bem-vindo a SpaceLab</h1>
    </BannerUm>
  )
}
export const AreaProdutos = () => {
  return (
    <ContainerAreaCards>
      <h2>Produtos</h2>
      <Areacards>
        <Cards>
          <Camisetas src={Img}></Camisetas>
          <p> SPACELAB SPACESUIT ONESIE</p>
          <AdicionarCarrinho>
            <p>Adicionar ao carrinho</p>
            <img src={Carrinho}></img>
          </AdicionarCarrinho>
        </Cards>
        <Cards>
          <Camisetas src={Img}></Camisetas>
          <p> SPACELAB SPACESUIT ONESIE</p>
          <AdicionarCarrinho>
            <p>Adicionar ao carrinho</p>
            <img src={Carrinho}></img>
          </AdicionarCarrinho>
        </Cards>
        <Cards>
          <Camisetas src={Img}></Camisetas>
          <p> SPACELAB SPACESUIT ONESIE</p>
          <AdicionarCarrinho>
            <p>Adicionar ao carrinho</p>
            <img src={Carrinho}></img>
          </AdicionarCarrinho>
        </Cards>
      </Areacards>
    </ContainerAreaCards>
  )
}

export class Main extends Component {
  render() {
    return (
      <div>
        <Banner />
        <AreaProdutos />
        <Banner />
        <AreaProdutos />
      </div>
    )
  }
}
