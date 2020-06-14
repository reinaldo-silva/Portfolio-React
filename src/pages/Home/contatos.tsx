import React from 'react'

const facebook = require("../../assets/facebook.svg");
const linkedin = require("../../assets/linkedin.svg");
const github = require("../../assets/github.svg");
const instagram = require("../../assets/instagram.svg");

const Contatos = () => {
    return (
        <div className="icones-social">
          <a href="https://www.linkedin.com/in/reinaldo-silva-junior-543a25128/">
            <img src={linkedin} alt="Logo LinkedIn" />
          </a>
          <a href="https://github.com/reinaldo-silva">
            <img src={github} alt="Logo GitHub" />
          </a>
          <a href="https://www.facebook.com/junin.devatz">
            <img src={facebook} alt="Logo Facebook" />
          </a>
          <a href="https://www.instagram.com/_reinaldosilva/">
            <img src={instagram} alt="Logo Instagram" />
          </a>
        </div>
    )
}

export default Contatos;