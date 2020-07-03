import React from "react";

const Foto = require("../../assets/foto.jpg")

const Sobre = () => {
  return (
    <>
      <div id="sobre" className="sobre">

        <div className="titulo">
          <h1>Sobre mim</h1>
          <div className="linha"></div>
        </div>

        <div className="sobre-conteudo">
            <div className="texto">
            <span>
            Uma mente em constante desenvolvimento
            <br/><br/>
            Um jovem estudante de 22 anos apaixonado por todo tipo de tecnologia que pulou de cabeça no mundo do TI.
            Graduando em Sistemas da Informação no UNIFAFIBE, procuro aprender e estar por dentro de todas tecnologias de desenvolvimento.
            <br/>
            Atualmente trabalho como Desenvolvedor Front-End na ImobPower, um local onde tenho muito a aprender e crescer profissionalmente. Com essa experiencia, pretendo me tornar um desenvolvedor Full-Stack muito em breve.
            </span>
            </div>
            <img src={Foto} alt="Foto Reinaldo Silva"/>
        </div>

      </div>
    </>
  );
};

export default Sobre;
