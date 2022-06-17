import React, { Component } from "react";
import styled from "styled-components";

const ContainerBusca = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #c1c0c5;
  gap: 10px;
`;

const ContainerFiltro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const Filtros = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  input {
    width: 142px;
  }
  select {
    width: 150px;
  }
`;

const ContainerResultado = styled.div`
  display: flex;
  background-color: white;
  flex-wrap: wrap;
  border: 1px solid black;
  box-shadow: 0 0 16px gray;
  width: 600px;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px;
  @media screen and (max-width: 480px) {
    width: 320px;
  }
`;

const CardResultado = styled.div`
  display: grid;
  grid-template-columns: 190px;
  grid-template-rows: 200px 40px 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  box-shadow: 0 0 8px gray;
  p {
    margin: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    height: 180px;
    margin: 0 auto;
  }
`;

const InputBuscar = styled.input`
  width: 600px;
  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

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
        return item;
      }
    });

    const arrayResultadoProdutos = arrayProdutos.map((item) => {
      return (
        <CardResultado key={item.id}>
          <img src={item.foto} />
          <p>{item.nomeProduto}</p>
          <p>R${item.preco},00</p>
        </CardResultado>
      );
    });
    return (
      <ContainerBusca>
        <ContainerFiltro>
          <div>
            <InputBuscar
              onChange={this.props.Busca}
              value={this.props.InputBusca}
              placeholder="Buscar"
            />
          </div>
          <Filtros>
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
            <select onChange={this.props.SelectOrdernar}>
              <option>- Ordenar -</option>
              <option>Crescente</option>
              <option>Decrescente</option>
            </select>
          </Filtros>
        </ContainerFiltro>
        <ContainerResultado>{arrayResultadoProdutos}</ContainerResultado>
      </ContainerBusca>
    );
  }
}
