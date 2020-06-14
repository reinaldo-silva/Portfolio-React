import React, { useState } from "react";
import "./style.css";
import { FiChevronDown } from "react-icons/fi";

import Sobre from "./sobre";
import Projetos from "./projetos";
import Skils from "./skils";
import Contatos from "./contatos";
import Toggle from "../../Components/toggle";
import SlideBar from "../../Components/slidebar";

//const Carregando = require("../../assets/loading.gif");
//const ReactImg = require("../../assets/react.gif");

const coding = require("../../assets/coding.svg");
const flechaVoltar = require("../../assets/arrow-up-circle.svg");

const Home = () => {
  const [slideOpen, setSlideOpen] = useState(false);

  const openHandler = () => {
    if (!slideOpen) {
      setSlideOpen(true);
    } else {
      setSlideOpen(false);
    }
  };

  const slidebarCloseHandler = () => {
    setSlideOpen(false)
  }

  let slidebar;
  if (slideOpen) {
    slidebar = <SlideBar close={slidebarCloseHandler} slidebar={"barra-slide"}/>;
  }

  return (
    <>
      {slidebar}
      <Toggle click={openHandler} />

      <a href="#home" id="botao-voltar">
        <img src={flechaVoltar} alt="voltar ao home" />
      </a>
      <div id="home">
        <Contatos />
      </div>

      <div className="home">
        <div className="conteudo">
          <h1>Developer Full Stack</h1>
          <a href="#projetos">
            <span>
              <FiChevronDown fontSize={40} />
            </span>
            <strong>Ver Projetos</strong>
          </a>
        </div>
        <img src={coding} alt="" />
      </div>

      <Projetos />

      <Sobre />

      <Skils />

      <div className="rodape">
        <Contatos />
        <span>Reinaldo Luiz da Silva Junior</span>
        <span>E-mail: reinaldo.silva.jr@outlook.com</span>
        <span>Telefone: (17) 99111-5889</span>
      </div>
    </>
  );
};

export default Home;
