import React, { Fragment } from "react";

import "./resume.css";

function Resume() {
  return (
    <Fragment>
      <div className={"page-topic"}>
        <section className={"resume"}>
          <p className={"chart-article-paragraph "}>
            Projeto desenvolvido com intuito de esclarecer a queda da taxa de
            adesão de estudantes em cursos superiores, juntamente com o aumento
            do número de desistências nesses cursos, além de evidenciar a
            desigualdade de gênero presente no ensino superior da cidade de
            Feliz.
          </p>
          <p className={"chart-article-paragraph "}>
            A fim democratizar o acesso a informação no que tange a realidade do
            ensino superior no Campus Feliz do IFRS, utilizamos a metodologia de
            extrair e organizar dados públicos da cidade de Feliz, (no âmbito da
            educação) de arquivos .csv disponibilizados pelo governo do estado
            do Rio Grande do Sul.
          </p>
          <p className={"chart-article-paragraph "}>
            Os arquivos foram percorridos por meio da tecnologia Node JS,
            utilizando a linguagem Javascript e foram disponibilizados por meio
            de uma API. Cuja página que você está acessando no momento,
            construída por meio da tecnologia React (framework JavaScript)
            consome utilizando Axios (biblioteca JavaScript que busca facilitar
            a realização de requisições HTTP) e constrói os gráficos que você
            está vendo com a biblioteca Google React Charts.
          </p>
        </section>
      </div>
    </Fragment>
  );
}

export default Resume;
