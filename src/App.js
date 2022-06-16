import React, { Component } from 'react'
import Header from './componentes/Header'
import { Main } from './componentes/Main'
import Footer from './componentes/Footer'
import styled from 'styled-components'
import ImgCamiseta from './img/Camiseta1.jpg'
import Carrinho from './componentes/Carrinho/Carrinho'
import Busca from './componentes/Busca/Busca'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
`

export default class App extends Component {
  state = {
    pagina: 'carrinho',
    inputBusca: '',
    inputPrecoMin: 0,
    inputPrecoMax: Infinity,
    produtos: [
      {
        id: 1,
        nomeProduto: 'SPACELAB SPACESUIT ONESIE',
        preco: 300,
        foto: ImgCamiseta
      },
      {
        id: 2,
        nomeProduto: 'Teste',
        preco: 300,
        foto: 'https://picsum.photos/id/137/200/200'
      },
      {
        id: 3,
        nomeProduto: 'Jaqueta',
        preco: 300,
        foto: 'https://picsum.photos/id/237/200/200'
      },
      {
        id: 4,
        nomeProduto: 'Jaqueta',
        preco: 300,
        foto: 'https://picsum.photos/id/937/200/200'
      },
      {
        id: 5,
        nomeProduto: 'Jaqueta',
        preco: 300,
        foto: 'https://picsum.photos/id/737/200/200'
      },
      {
        id: 6,
        nomeProduto: 'Jaqueta',
        preco: 300,
        foto: 'https://picsum.photos/id/257/200/200'
      }
    ],
    carrinho: [
      {
        id: 1,
        nomeProduto: 'SPACELAB SPACESUIT ONESIE',
        preco: 300,
        foto: ImgCamiseta
      },
      {
        id: 2,
        nomeProduto: 'Teste',
        preco: 300,
        foto: 'https://picsum.photos/id/137/200/200'
      }
    ]
  }

  onClickMenu1 = () => {
    this.setState({
      pagina: 'home'
    })
  }

  onClickMenu2 = () => {
    this.setState({
      pagina: 'carrinho'
    })
  }

  onClickMenu3 = () => {
    this.setState({
      pagina: 'buscar'
    })
  }

  onClickMenu4 = () => {
    this.setState({
      pagina: 'login'
    })
  }

  adicionarNoCarrinho = (id) => {
    const adicionarCarrinho = this.state.produtos.filter((item) => {
      return item.id === id
    })
    const arrayCarrinho = [...this.state.carrinho, adicionarCarrinho[0]]
    this.setState({
      carrinho: arrayCarrinho
    })
  }

  onClickRemover = (id) => {
    const ArrayRemover = this.state.carrinho.filter((item, index) => {
      return index !== id
    })
    this.setState({
      carrinho: ArrayRemover
    })
  }

  onChangeBusca = (event) => {
    this.setState({
      inputBusca: event.target.value
    })
  }
  onChangePrecoMin = (event) => {
    this.setState({
      inputPrecoMin: event.target.value
    })
  }
  onChangePrecoMax = (event) => {
    if (event.target.value !== '') {
      this.setState({
        inputPrecoMax: event.target.value
      })
    } else {
      this.setState({
        inputPrecoMax: Infinity
      })
    }
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
        {this.state.pagina === 'home' && (
          <Main
            valoresProdutos={this.state.produtos}
            adicionarNoCarrinho={this.adicionarNoCarrinho}
          />
        )}
        {this.state.pagina === 'carrinho' && (
          <Carrinho
            Remover={this.onClickRemover}
            carrinho={this.state.carrinho}
          />
        )}
        {this.state.pagina === 'buscar' && (
          <Busca
            Produtos={this.state.produtos}
            InputBusca={this.state.inputBusca}
            InputPrecoMin={this.state.inputPrecoMin}
            InputPrecoMax={this.state.inputPrecoMax}
            Busca={this.onChangeBusca}
            PrecoMin={this.onChangePrecoMin}
            PrecoMax={this.onChangePrecoMax}
          />
        )}
        {this.state.pagina === 'login' && console.log('pagina login')}
        <Footer />
      </Container>
    )
  }
}
