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
            <span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, amet mollitia eaque dolorum praesentium sunt vero repellat enim facilis neque quisquam possimus repudiandae nisi eius iure veniam. Enim optio facere impedit et quia dicta cum repudiandae dignissimos cupiditate sunt iste laudantium nulla quasi, maiores placeat, ducimus quisquam, voluptatibus fugiat magni modi doloremque neque ut temporibus nostrum? Amet incidunt quaerat natus aspernatur necessitatibus. Laboriosam voluptatem assumenda, nulla tempora totam ipsum recusandae corporis quaerat? Eum animi a fugiat fugit adipisci. Et sequi porro ipsam animi minima eveniet, nisi laboriosam illum soluta numquam corrupti error possimus facilis accusamus cumque optio libero reprehenderit laudantium neque consequatur dicta minus. Quia autem officia culpa voluptatem expedita et optio earum eius ad veniam neque laboriosam blanditiis cupiditate maxime quod ab eveniet illum non repellendus, voluptatum dicta? Magni impedit possimus, nobis porro illo sit recusandae aspernatur nostrum explicabo sapiente beatae cumque, ipsa in nisi, quasi enim at ipsum itaque dolores fugit nihil. Ex vitae consectetur rem corporis, dolorum dicta in animi obcaecati saepe deserunt debitis distinctio facere, aspernatur amet dolor laudantium quis harum blanditiis cumque nobis necessitatibus voluptates doloremque. Doloremque saepe quasi facilis unde magni quis corrupti maxime, corporis natus earum nesciunt eveniet vitae amet, dolorem ut accusantium.</span>
            </div>
            <img src={Foto} alt="Foto Reinaldo Silva"/>
        </div>

      </div>
    </>
  );
};

export default Sobre;
