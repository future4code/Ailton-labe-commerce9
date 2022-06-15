import React, { Component } from 'react'
import Header from './componentes/Header'
import { Main } from './componentes/Main'
import Footer from './componentes/Footer'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
`

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    )
  }
}
