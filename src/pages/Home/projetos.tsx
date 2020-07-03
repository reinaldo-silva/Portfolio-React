import React from "react";


import "./projetos.css";

const mapa = require("../../assets/signs.svg");
const cartao = require("../../assets/business.svg");
const graficos = require("../../assets/communications.svg");


const Projetos = () => {

  return (
    <>
      <div className="titulo">
        <h1 id="projetos">Projetos</h1>
        <div className="linha"></div>
      </div>

      <div className="projects">
        <div className="card">
          <div className="face face1">
            <div className="content">
                <img src={cartao} alt=""/>
              <h3>Portfolio</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
              Portfólio desenvolvido para ser postado todos os o projetos ja criados ou em desenvolvimento.
              </p>
              <a href="##" className="readMore1">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
                <img src={mapa} alt="Mapa"/>
              <h3>QuestFinder</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
              App de geolocalização que facilite a movimentação em ambientes fechados.
              </p>
              <a href="##" className="readMore2">Read More</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
                <img src={graficos} alt=""/>
              <h3>Aulas-Unifafibe</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content" id="muda">
              <p>
                Projeto que fornecerá aulas desenvolvidas e planejadas pelos próprios alunos da Universidade.
              </p>
              <a href="##" className="readMore3">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Projetos;
