import React, { Component } from "react";
import styled from "styled-components";
import IconInstagram from "../img/Instagram.png";
import IconDiscord from "../img/discord.png";
import IconTwitter from "../img/twitter.png";
import IconYoutube from "../img/youtube.png";

const FooterUm = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  background-color: black;
  max-height: 350px;
  color: white;
  /* gap: 20px; */
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 1fr);
  }
`;
const FooterEnd = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  grid-area: 2/1/3/4;
  justify-content: center;
  @media screen and (max-width: 480px) {
    grid-area: 4/1/5/4;
    justify-content: center;
    align-items: center;
  }
`;

const FooterLeft = styled.div`
  grid-area: 1/1/2/2;
  padding: 20px 40px;
  p {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 480px) {
    grid-area: 3/1/4/4;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding: 0 40px;
    p {
      margin: 0;
    }
  }
`;

const FooterCenter = styled.div`
  grid-area: 1/2/2/3;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  @media screen and (max-width: 480px) {
    grid-area: 1/1/2/4;
  }
`;

const Logo = styled.p`
  font-style: italic;
  font-size: 32px;
  font-weight: 700;
  background-color: red;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    font-size: 28px;
    margin: 16px;
  }
`;

const FooterRight = styled.div`
  grid-area: 1/3/2/4;
  padding: 20px 40px;
  gap: 8px;
  display: grid;
  justify-content: end;
  @media screen and (max-width: 480px) {
    grid-area: 2/1/3/4;
    display: flex;
    flex-direction: rows;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 40px;
    align-items: center;
  }
`;
const Sociais = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: unset;
  }
  :hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export default class Footer extends Component {
  render() {
    return (
      <FooterUm role="Rodapé da página">
        <FooterLeft>
          <p>Contatos</p>
          <p>FAQ</p>
          <p>Sobre nós</p>
        </FooterLeft>

        <FooterCenter>
          <Logo onClick={this.props.onClickMenu1}>SpaceLab</Logo>
        </FooterCenter>

        <FooterRight>
          <Sociais>
            <a href="https://www.instagram.com/labenu_/" target="blank">
              Instagram
            </a>
            <img src={IconInstagram} alt="ícone do instagram"></img>
          </Sociais>
          <Sociais>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="blank"
            >
              Discord
            </a>
            <img src={IconDiscord} alt="ícone do discord"></img>
          </Sociais>
          <Sociais>
            <a href="https://twitter.com/labenu_" target="blank">
              Twitter
            </a>
            <img src={IconTwitter} alt="ícone do twitter"></img>
          </Sociais>
          <Sociais>
            <a href="https://www.youtube.com/c/labenu" target="blank">
              Youtube
            </a>
            <img src={IconYoutube} alt="ícone do youtube"></img>
          </Sociais>
        </FooterRight>

        <FooterEnd>
          <p>Paulo Henrique</p>
          <p>Sávio Henriques</p>
          <p>Carlos Sousa</p>
        </FooterEnd>
      </FooterUm>
    );
  }
}
