import React from "react";

import "./skils.css";

const html = require("../../assets/html-5.svg");
const css = require("../../assets/css.svg");
const react = require("../../assets/react.svg");
const javascript = require("../../assets/javascript.svg");
const typescrpit = require("../../assets/typescript.svg");
const node = require("../../assets/nodejs.svg");

const Skils = () => {
  return (
    <>
      <div className="titulo">
        <h1>Skills</h1>
        <div className="linha"></div>
      </div>
  
      <div className="skills-slide">
        <div className="card">
          <div className="face imagem">
            <div className="content">
              <img src={html} alt="" />
            </div>
          </div>
          <div className="face texto">
            <div className="content">
              <p>
                89%
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face imagem">
            <div className="content">
              <img src={css} alt="" />
            </div>
          </div>
          <div className="face texto">
            <div className="content">
              <p>
                81%
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face imagem">
            <div className="content">
              <img src={react} alt="" />
            </div>
          </div>
          <div className="face texto">
            <div className="content">
              <p>
                70%
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face imagem">
            <div className="content">
              <img src={javascript} alt="" />
            </div>
          </div>
          <div className="face texto">
            <div className="content">
              <p>
                63%
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face imagem">
            <div className="content">
              <img src={typescrpit} alt="" />
            </div>
          </div>
          <div className="face texto">
            <div className="content">
              <p>
                52%
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face imagem">
            <div className="content">
              <img src={node} alt="" />
            </div>
          </div>
          <div className="face texto">
            <div className="content">
              <p>
                73%
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skils;
