import React from 'react'
import "./style.css"

const Carregando = require("../../assets/loading.gif");
const ReactImg = require("../../assets/react.gif");

const Home = () => {
    return (
        <>
        <div className="conteudo" >
        <h1>Portifolio em construção</h1>
            <div className="conteudo">
                <img src={Carregando} alt=""/>
                <img src={ReactImg} alt=""/>
            </div>
        </div>
        </>
    )
}

export default Home;