import React, { useState, MouseEvent } from "react";
import { FiXCircle, FiMail, FiPhone } from "react-icons/fi";

interface clickProps {
  slidebar: string;
  close: () => void;
}

const SlideBar: React.FC<clickProps> = (props) => {
  const [slideBarClass, setSlidebarClass] = useState(props.slidebar);

  const closeHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSlidebarClass("barra-slide close");
    setTimeout(() => {
      props.close();
    }, 250);
  };

  $(function () {
    $(".readMore3").click(function (e) {
      e.preventDefault();
      $("#3").css({
        opacity: "1",
        visibility: "visible",
      });
      $("#terceiro").removeClass("modal-close");
    });
  });

  return (
    <>
      <div className={slideBarClass}>
        <button id="close" onClick={closeHandler}>
          <FiXCircle className="slideIcon" />
        </button>

        <div className="conteudo-slide">
          <a href="#projetos">
            <h3>Projetos</h3>
          </a>
          <a href="#sobre">
            <h3>Sobre</h3>
          </a>
          <a href="#skills">
            <h3>Skills</h3>
          </a>
        </div>

        <footer>
          <div id="divisao"></div>
          <FiPhone className="slideIcon" id="iconFone" />
          <FiMail className="slideIcon" id="iconeEmail"/>
        </footer>
      </div>
    </>
  );
};

export default SlideBar;
