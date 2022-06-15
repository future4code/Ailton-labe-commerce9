import React, { Component } from 'react'
import styled from 'styled-components'
import banner from '../img/banner.jpg'
import BannerDois from '../img/banner-img.jpg'

const BannerUm = styled.div`
background-image: url(${BannerDois});
background-repeat: no-repeat;
background-attachment:inherit;
background-color: yellow;
height: 500px;
background-position: center;
background-size: cover ;
`
const Areacards = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center;
background: white;
gap: 40px;
padding: 40px;
`
const Cards = styled.div`
width: 400px;
height: 500px;
background-color: #999;
`



export const Banner = () => {
    return (
        <BannerUm></BannerUm>
    )
}
export const AreaProdutos = () => {
    return (    
            <Areacards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
            </Areacards>             
    )
}

export class Main extends Component {
    render() {
        return (
            <div>
                <Banner />
                <AreaProdutos />
                <Banner />
                <AreaProdutos />
            </div>
        )
    }
}

