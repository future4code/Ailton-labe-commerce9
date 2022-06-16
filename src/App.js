import React, { Component } from "react";
import Header from "./componentes/Header";
import { Main } from "./componentes/Main";
import Footer from "./componentes/Footer";
import styled from "styled-components";
import ImgCamiseta from "./img/Camiseta1.jpg";
import Carrinho from "./componentes/Carrinho/Carrinho";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
`;

export default class App extends Component {
  state = {
    pagina: "carrinho",
    produtos: [
      {
        id: 1,
        nomeProduto: "SPACELAB SPACESUIT ONESIE",
        preco: 300,
        foto: ImgCamiseta,
      },
      {
        id: 2,
        nomeProduto: "Teste",
        preco: 300,
        foto: "https://picsum.photos/id/137/200/200",
      },
      {
        id: 3,
        nomeProduto: "Jaqueta",
        preco: 300,
        foto: "https://picsum.photos/id/237/200/200",
      },
      {
        id: 4,
        nomeProduto: "Jaqueta",
        preco: 300,
        foto: "https://picsum.photos/id/937/200/200",
      },
      {
        id: 5,
        nomeProduto: "Jaqueta",
        preco: 300,
        foto: "https://picsum.photos/id/737/200/200",
      },
      {
        id: 6,
        nomeProduto: "Jaqueta",
        preco: 300,
        foto: "https://picsum.photos/id/257/200/200",
      },
    ],
    carrinho: [],
  };

  onClickMenu1 = () => {
    this.setState({
      pagina: "home",
    });
  };

  onClickMenu2 = () => {
    this.setState({
      pagina: "carrinho",
    });
  };

  onClickMenu3 = () => {
    this.setState({
      pagina: "buscar",
    });
  };

  onClickMenu4 = () => {
    this.setState({
      pagina: "login",
    });
  };

  adicionarNoCarrinho = (id) => {
    const adicionarCarrinho = this.state.produtos.filter((item) => {
      return item.id === id;
    });
    const arrayCarrinho = [...this.state.carrinho, adicionarCarrinho[0]];
    this.setState({
      carrinho: arrayCarrinho,
    });
  };

  render() {
    return (
      <Container>
        <Header
          onClickMenu1={this.onClickMenu1}
          onClickMenu2={this.onClickMenu2}
          onClickMenu3={this.onClickMenu3}
          onClickMenu4={this.onClickMenu4}
        />
        {this.state.pagina === "home" && (
          <Main
            valoresProdutos={this.state.produtos}
            adicionarNoCarrinho={this.adicionarNoCarrinho}
          />
        )}
        {this.state.pagina === "carrinho" && (
          <Carrinho carrinho={this.state.carrinho} />
        )}
        {this.state.pagina === "buscar" && console.log("pagina buscar")}
        {this.state.pagina === "login" && console.log("pagina login")}
        <Footer />
      </Container>
    );
  }
}
