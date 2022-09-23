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
      <h1 className={"chart-group-title"}>
        Tecnologias Cívicas: Integrando o Poder ao Público
      </h1>
    </header>
  );
}

export default Header;
