import React, { Component } from "react";
import styled from "styled-components";
import IconInstagram from "../img/Instagram.png";
import IconDiscord from "../img/discord.png";
import IconTwitter from "../img/twitter.png";
import IconYoutube from "../img/youtube.png";

const FooterUm = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-content: center;
  background-color: black;
  height: 350px;
  color: white;
  gap: 20px;
`;
const FooterEnd = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  grid-area: 2/1/3/4;
  justify-content: center;
`;
const FooterLeft = styled.div`
  grid-area: 1/1/2/2;
  padding: 20px 40px;
`;

const FooterCenter = styled.div`
  grid-area: 1/2/2/3;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  p{
    font-size: 32px;
    font-weight: 700;
  }
`;

const FooterRight = styled.div`
  grid-area: 1/3/2/4;
  padding: 20px 40px;
  display: grid;

  justify-content: end;
`;
const Sociais = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;
`;

export default class Footer extends Component {
  render() {
    return (
      <FooterUm>
        <FooterLeft>
          <p>Contatos</p>
          <p>FAQ</p>
          <p>Sobre nós</p>
        </FooterLeft>

        <FooterCenter>
          <p>SpaceLab</p>
        </FooterCenter>

        <FooterRight>
          <Sociais>
            <p>Instagram</p>
            <img src={IconInstagram} alt=""></img>
          </Sociais>
          <Sociais>
            <p>Discord</p>
            <img src={IconDiscord} alt=""></img>
          </Sociais>
          <Sociais>
            <p>Twitter</p>
            <img src={IconTwitter} alt=""></img>
          </Sociais>
          <Sociais>
            <p>Youtube</p>
            <img src={IconYoutube} alt=""></img>
          </Sociais>
        </FooterRight>

        <FooterEnd>
          <p>SpaceLab</p>
          <p>Paulo Henrique</p>
          <p>Sávio Henriques</p>
          <p>Carlos Sousa</p>
        </FooterEnd>
      </FooterUm>
    );
  }
}
