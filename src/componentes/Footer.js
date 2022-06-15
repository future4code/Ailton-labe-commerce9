import React, { Component } from 'react'
import styled from 'styled-components'

const FooterUm = styled.footer`
display: flex;
justify-content: center;
background-color: black;
height: 500px;
color: white;
gap: 20px;
`
const FooterEnd = styled.div`
display: flex;
align-items:flex-end ;
gap: 20px;
`

export default class Footer extends Component {
  render() {
    return (
    <FooterUm>
        <p>contatos</p>
        <p>FAQ</p>
        <p>Sobre nós</p>
        <p></p>
        <FooterEnd>
        <p>SpaceLab</p>
        <p>Paulo Henrique</p>
        <p>Sávio Henrique</p>
        <p>Carlos Sousa</p>
        </FooterEnd>
    </FooterUm>
    )
  }
}
