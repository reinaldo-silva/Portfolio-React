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
  return (
    <>
      <div className={slideBarClass}>
        <button id="close" onClick={closeHandler}>
          <FiXCircle className="slideIcon" />
        </button>

        <div className="conteudo-slide"></div>
        <footer>
          
          <div id="divisao"></div>
          <FiPhone className="slideIcon"/>
          <FiMail className="slideIcon"/>

        </footer>
      </div>
    </>
  );
};

export default SlideBar;
