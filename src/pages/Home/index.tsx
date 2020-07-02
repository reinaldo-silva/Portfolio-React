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

import "../../Components/modal/modal.css";

const coding = require("../../assets/coding.svg");
const flechaVoltar = require("../../assets/arrow-up-circle.svg");
const mapa = require("../../assets/signs.svg");
const cartao = require("../../assets/business.svg");
const graficos = require("../../assets/communications.svg");

const Home = () => {
  $(function () {

    $("#click").click(function(){
      $("#click, #3").removeClass("click-show");
      setSlideOpen(false);
    });

    $("#iconFone").click(function (e) {
      e.preventDefault();
      $("#telefone").addClass('open-slide');
      $("#click").removeClass("click-show");
      setSlideOpen(false);
    });

    $("#iconeEmail").click(function (e) {
      e.preventDefault();
      $("#email").addClass('open-slide');
      $("#click").removeClass("click-show");
      setSlideOpen(false);
    });

    $("#telefone").click(function(){
      $("#telefone").removeClass('open-slide');
    });

    $("#email").click(function(){
      $("#email").removeClass('open-slide');
    });

    $(".readMore1").click(function (e) {
      e.preventDefault();
      $("#1").addClass("click-show");
      $("#primeiro").removeClass("modal-close");
    });

    $(".readMore2").click(function (e) {
      e.preventDefault();
      $("#2").addClass("click-show");
      $("#segundo").removeClass("modal-close");
    });

    $(".readMore3").click(function (e) {
      e.preventDefault();
      $("#3").css({
        "opacity": "1",
        "visibility": 'visible'
      });
      $("#terceiro").removeClass("modal-close");
    });

    $(".close").click(function (e) {
      e.preventDefault();
      $(".modal").addClass("modal-close");
      $(".click-hidden").removeClass("click-show");
      $("#3").css({
        "opacity": "0",
        "visibility": 'hidden'
      });
    });

  });

  const [slideOpen, setSlideOpen] = useState(false);

  const openHandler = () => {
    if (!slideOpen) {
      setSlideOpen(true);
      $("#click").addClass("click-show");
    } else {
      setSlideOpen(false);
    }
  };

  const slidebarCloseHandler = () => {
    setSlideOpen(false);
  };

  let slidebar;
  if (slideOpen) {
    slidebar = (
      <SlideBar close={slidebarCloseHandler} slidebar={"barra-slide"} />
    );
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
      <div id="1" className="click-hidden">
        <div id="primeiro" className="modal modal-close">
          <p className="close">X</p>
          <div className="modal-section">
            <img src={cartao} alt="" />
            <h3 id="titulo">Portfolio</h3>
          </div>
          <div className="modal-section">
            <p className="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ea
              doloremque veniam eligendi, repellendus quia voluptatum vitae nam
              odio nulla itaque voluptatibus voluptates dignissimos deleniti
              minus culpa nesciunt molestias in. Dolore earum tenetur repellat
              quisquam cumque quo sunt, quis nemo beatae ipsa error veritatis
              officia quidem amet vero aut nihil! Exercitationem labore debitis
              perferendis aspernatur, non sapiente maxime voluptatibus quia
              itaque reprehenderit? Facere laudantium, adipisci voluptates modi
              error pariatur neque fugit, nam in rem dolor, non laborum nostrum?
              Eaque laborum maiores veritatis aperiam inventore adipisci ab ame
            </p>
          </div>
        </div>
      </div>

      <div id="2" className="click-hidden">
        <div id="segundo" className="modal modal-close">
          <p className="close">X</p>
          <div className="modal-section">
            <img src={mapa} alt="" />
            <h3 id="titulo">QuestFinder</h3>
          </div>
          <div className="modal-section">
            <p className="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ea
              doloremque veniam eligendi, repellendus quia voluptatum vitae nam
              odio nulla itaque voluptatibus voluptates dignissimos deleniti
              minus culpa nesciunt molestias in. Dolore earum tenetur repellat
              quisquam cumque quo sunt, quis nemo beatae ipsa error veritatis
              officia quidem amet vero aut nihil! Exercitationem labore debitis
              perferendis aspernatur, non sapiente maxime voluptatibus quia
              itaque reprehenderit? Facere laudantium, adipisci voluptates modi
              error pariatur neque fugit, nam in rem dolor, non laborum nostrum?
              Eaque laborum maiores veritatis aperiam inventore adipisci ab ame
            </p>
          </div>
        </div>
      </div>

      <div id="3" className="click-hidden">
        <div id="terceiro" className="modal modal-close">
          <p className="close">X</p>
          <div className="modal-section">
            <img src={graficos} alt="" />
            <h3 id="titulo">Aulas-Unifafibe</h3>
          </div>
          <div className="modal-section">
            <p className="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ea
              doloremque veniam eligendi, repellendus quia voluptatum vitae nam
              odio nulla itaque voluptatibus voluptates dignissimos deleniti
              minus culpa nesciunt molestias in. Dolore earum tenetur repellat
              quisquam cumque quo sunt, quis nemo beatae ipsa error veritatis
              officia quidem amet vero aut nihil! Exercitationem labore debitis
              perferendis aspernatur, non sapiente maxime voluptatibus quia
              itaque reprehenderit? Facere laudantium, adipisci voluptates modi
              error pariatur neque fugit, nam in rem dolor, non laborum nostrum?
              Eaque laborum maiores veritatis aperiam inventore adipisci ab ame
            </p>
          </div>
        </div>
      </div>

      <div id="telefone" className="modal-container-slide">
        <h1>(17) 99111-5889</h1>
      </div>

      <div id="email" className="modal-container-slide">
        <h1>reinaldo.silva.jr@outlook.com</h1>
      </div>

      <div id="click" className="click-hidden"></div>
    </>
  );
};

export default Home;
