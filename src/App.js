import React, { Component } from "react";
import Header from "./componentes/Header";
import { Main } from "./componentes/Main";
import Footer from "./componentes/Footer";
import styled from "styled-components";
import ImgCamiseta from "./img/Camiseta1.jpg";
import ImgCamiseta2 from "./img/Camiseta2.png";
import ImgCamiseta3 from "./img/Camiseta3.png";
import ImgCamiseta4 from "./img/Camiseta4.png";
import ImgCamiseta5 from "./img/Camiseta5.png";
import ImgCamiseta6 from "./img/Camiseta6.png";
import Carrinho from "./componentes/Carrinho/Carrinho";
import Busca from "./componentes/Busca/Busca";
import Login from "./componentes/Login/Login";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
  background-color: black;
`;

export default class App extends Component {
  state = {
    pagina: "home",
    inputBusca: "",
    inputPrecoMin: "",
    selectOrdernar: "Crescente",
    inputPrecoMax: Infinity,
    produtos: [
      {
        id: 1,
        nomeProduto: "SPACELAB SPACESUIT ONESIE",
        preco: 300,
        foto: ImgCamiseta,
      },
      {
        id: 2,
        nomeProduto: "SPACELAB SPACESUIT MYSTICAL",
        preco: 666,
        foto: ImgCamiseta2,
      },
      {
        id: 3,
        nomeProduto: "SPACELAB SIMPLE",
        preco: 129,
        foto: ImgCamiseta3,
      },
      {
        id: 4,
        nomeProduto: "SPACELAB USA BLACK",
        preco: 299,
        foto: ImgCamiseta4,
      },
      {
        id: 5,
        nomeProduto: "SPACELAB USA PINK",
        preco: 299,
        foto: ImgCamiseta5,
      },
      {
        id: 6,
        nomeProduto: "SPACELAB USA CAMOU",
        preco: 277,
        foto: ImgCamiseta6,
      },
    ],
    carrinho: [],
    carrinhoQnt: [],
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
    if (this.state.pagina !== "buscar") {
      this.setState({
        produtos: this.state.produtos.sort((a, b) => a.preco - b.preco),
      });
    }
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
    let temNoCarrinho = false;
    for (const item of this.state.carrinho) {
      if (id === item.id) {
        temNoCarrinho = true;
      }
    }
    if (temNoCarrinho === false) {
      const arrayCarrinho = [...this.state.carrinho, adicionarCarrinho[0]];
      const qnt = [...this.state.carrinhoQnt];
      qnt[id] = 1;
      this.setState({
        carrinho: arrayCarrinho,
        carrinhoQnt: qnt,
      });
    } else {
      const qnt = [...this.state.carrinhoQnt];
      qnt[id] = this.state.carrinhoQnt[id] + 1;
      this.setState({
        carrinhoQnt: qnt,
      });
    }
  };

  onClickRemover = (id) => {
    const idProduto = this.state.carrinho
      .filter((item, index) => {
        return id === index;
      })
      .map((item) => {
        return item.id;
      });
    let qnt = this.state.carrinhoQnt;
    qnt[idProduto[0]]--;
    if (qnt[idProduto[0]] <= 0) {
      const ArrayRemover = this.state.carrinho.filter((item, index) => {
        return index !== id;
      });
      this.setState({
        carrinho: ArrayRemover,
      });
    } else {
      this.setState({
        carrinhoQnt: qnt,
      });
    }
  };

  onChangeBusca = (event) => {
    this.setState({
      inputBusca: event.target.value,
    });
  };

  onChangePrecoMin = (event) => {
    this.setState({
      inputPrecoMin: event.target.value,
    });
  };

  onChangePrecoMax = (event) => {
    if (event.target.value !== "") {
      this.setState({
        inputPrecoMax: event.target.value,
      });
    } else {
      this.setState({
        inputPrecoMax: Infinity,
      });
    }
  };

  onChangeOrdenar = (event) => {
    this.setState({
      selectOrdernar: event.target.value,
    });
    if (event.target.value === "Crescente") {
      this.setState({
        produtos: this.state.produtos.sort((a, b) => a.preco - b.preco),
      });
    }
    if (event.target.value === "Decrescente") {
      this.setState({
        produtos: this.state.produtos.sort((a, b) => b.preco - a.preco),
      });
    }
  };

  componentDidMount() {
    if (localStorage.getItem("carrinho")) {
      const converterCarrinho = JSON.parse(localStorage.getItem("carrinho"));
      this.setState({
        carrinho: converterCarrinho,
      });
    }
    if (localStorage.getItem("carrinhoQnt")) {
      const converterCarrinhoQnt = JSON.parse(
        localStorage.getItem("carrinhoQnt")
      );
      this.setState({
        carrinhoQnt: converterCarrinhoQnt,
      });
    }
  }
  componentDidUpdate() {
    localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho))
    localStorage.setItem("carrinhoQnt", JSON.stringify(this.state.carrinhoQnt))
  }

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
          <Carrinho
            Remover={this.onClickRemover}
            carrinhoQnt={this.state.carrinhoQnt}
            carrinho={this.state.carrinho}
          />
        )}

        {this.state.pagina === "buscar" && (
          <Busca
            adicionarNoCarrinho={this.adicionarNoCarrinho}
            Produtos={this.state.produtos}
            InputBusca={this.state.inputBusca}
            InputPrecoMin={this.state.inputPrecoMin}
            InputPrecoMax={this.state.inputPrecoMax}
            Busca={this.onChangeBusca}
            PrecoMin={this.onChangePrecoMin}
            PrecoMax={this.onChangePrecoMax}
            SelectOrdernar={this.onChangeOrdenar}
          />
        )}

        {this.state.pagina === "login" && <Login />}
        <Footer onClickMenu1={this.onClickMenu1} />
      </Container>
    );
  }
}
