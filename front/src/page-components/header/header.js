import React from "react";

import "./header.css";

function Header() {
  return (
    <header>
      <img
        height={"150px"}
        alt="Logo IFRS"
        className={"logo"}
        src={require("./../../assets/img/logo-if.png")}
      ></img>
      <section>
        <h1 className={"title"}>
          Tecnologias Cívicas: Integrando o Poder ao Público
        </h1>
        <h2 className={"title"}>Harrison Guinter e Thiago Nienov</h2>
      </section>
    </header>
  );
}

export default Header;
