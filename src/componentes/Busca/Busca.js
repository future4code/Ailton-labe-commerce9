import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerBusca = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
`
const ContainerFiltro = styled.div``
const ContainerResultado = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  width: 600px;
  height: 600px;
`
const CardResultado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  img {
    width: 100px;
  }
`

export default class Busca extends Component {
  render() {
    const arrayProdutos = this.props.Produtos.filter((item) => {
      if (
        item.nomeProduto
          .toLowerCase()
          .includes(this.props.InputBusca.toLowerCase()) &&
        item.preco >= this.props.InputPrecoMin &&
        item.preco <= this.props.InputPrecoMax
      ) {
        return item
      }
    })
    console.log(arrayProdutos)
    const arrayResultadoProdutos = arrayProdutos.map((item) => {
      return (
        <CardResultado>
          <img src={item.foto} />
          <p>{item.nomeProduto}</p>
          <p>{item.preco}</p>
        </CardResultado>
      )
    })
    return (
      <ContainerBusca>
        <ContainerFiltro>
          <input
            onChange={this.props.Busca}
            value={this.props.InputBusca}
            placeholder="Buscar"
          />
          <input
            onChange={this.props.PrecoMin}
            min={0}
            type="number"
            value={this.props.InputPrecoMin}
            placeholder="Preço mínimo"
          />
          <input
            onChange={this.props.PrecoMax}
            min={0}
            type="number"
            value={this.props.InputPrecoMax}
            placeholder="Preço máximo"
          />
        </ContainerFiltro>
        <ContainerResultado>{arrayResultadoProdutos}</ContainerResultado>
      </ContainerBusca>
    )
  }
}
