import React, { Component } from 'react'
import styled from 'styled-components'
import IconInstagram from '../img/Instagram.png'
import IconDiscord from '../img/discord.png'
import IconTwitter from '../img/twitter.png'
import IconYoutube from '../img/youtube.png'

const FooterUm = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-content: center;
  background-color: black;
  height: 350px;
  color: white;
  gap: 20px;
`
const FooterEnd = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  grid-area: 2/1/3/3;
  justify-content: center;
`
const FooterLeft = styled.div`
  grid-area: 1/1/2/2;
  padding: 10px;
`
const FooterRight = styled.div`
  grid-area: 1/2/2/3;
  padding: 10px;
  display: grid;

  justify-content: end;
`
const Sociais = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;
`

export default class Footer extends Component {
  render() {
    return (
      <FooterUm>
        <FooterLeft>
          <p>Contatos</p>
          <p>FAQ</p>
          <p>Sobre nós</p>
        </FooterLeft>
        <FooterRight>
          <Sociais>
            <p>Instagram</p>
            <img src={IconInstagram}></img>
          </Sociais>
          <Sociais>
            <p>Discord</p>
            <img src={IconDiscord}></img>
          </Sociais>
          <Sociais>
            <p>Twitter</p>
            <img src={IconTwitter}></img>
          </Sociais>
          <Sociais>
            <p>Youtube</p>
            <img src={IconYoutube}></img>
          </Sociais>
        </FooterRight>

        <FooterEnd>
          <p>SpaceLab</p>
          <p>Paulo Henrique</p>
          <p>Sávio Henriques</p>
          <p>Carlos Sousa</p>
        </FooterEnd>
      </FooterUm>
    )
  }
}
