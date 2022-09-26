import React, { useContext, Fragment } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import {
  mergeObjectsToKeyValueArray,
  transformObjectToKeyValueArray,
} from "../../utils/general-functions";
import { Environment } from "../../context/environment-provider";

function StudentsGraphics() {
  const { baseURL } = useContext(Environment);

  const [courses, setCoursesFeliz] = React.useState([]);

  const [enteringAndGraduatingStudents, setEnteringAndGraduatingStudentsFeliz] =
    React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${baseURL}/entering-and-graduating-students-feliz`)
      .then((response) => {
        setEnteringAndGraduatingStudentsFeliz(
          mergeObjectsToKeyValueArray(response.data)
        );
      });

    axios.get(`${baseURL}/courses-feliz`).then((response) => {
      setCoursesFeliz(
        response.data.map((element) => transformObjectToKeyValueArray(element))
      );
    });
  }, []);

  return (
    <Fragment>
      <div className={"page-topic"}>
        <section className={"chart-group"}>
          <h2 className={"title"}>
            Adesão ao ensino superior no IFRS Campus Feliz
          </h2>
          <figure className={"chart-list"}>
            {courses.map((element) => {
              const displayableColumns = element.filter((item) =>
                item && !isNaN(item[0]) ? true : false
              );

              return (
                <Chart
                  key={0}
                  chartType="Line"
                  data={[["Ano", "Cursos"], ...displayableColumns]}
                  className={"chart"}
                  options={{
                    chart: {
                      title: "Cursos superiores na cidade de " + element[11][1],
                      subtitle:
                        "É possível analisar a prioridade em expansão do ensino superior até o ano de 2015.",
                    },
                  }}
                  legendToggle
                />
              );
            })}

            {enteringAndGraduatingStudents.map((element) => {
              const displayableColumns = element.filter((item) =>
                item && !isNaN(item[0]) ? true : false
              );

              return (
                <Chart
                  key={1}
                  chartType="Line"
                  data={[
                    ["Ano", "Ingressantes", "Concluintes"],
                    ...displayableColumns,
                  ]}
                  className={"chart"}
                  options={{
                    colors: ["purple", "violet"],
                    chart: {
                      title: `Alunos ingressantes e concluintes de cursos superiores na cidade de Feliz`,
                      subtitle:
                        "O gráfico evidencia tremenda discrepância entre ingressos e conclusões.",
                    },
                  }}
                  legendToggle
                />
              );
            })}
          </figure>
        </section>
        <article className={"chart-article"}>
          <h3 className={"chart-article-title"}>
            O que causa tamanho declínio de adesão e permanência na instituição?
          </h3>
          <p className={"chart-article-paragraph"}>
            Embora no período de 2013 até 2016, no qual o campus possuía apenas
            o curso Técnologo em Processos Gerenciais apresentasse bons índices
            de ingresso e conclusão, a inclusão de 4 outros cursos impulsionou a
            visibilidade do Instituto Federal na região, trazendo inúmeros
            estudantes como consequência.
          </p>
          <p className={"chart-article-paragraph"}>
            “O Brasil tem apenas 8% dos alunos do ensino médio em programas
            vocacionais. A falta de orientação contribui para que haja uma
            desistência significativa dos jovens que ingressam no nível
            superior”, assim explica Mendonça Filho ex-ministro da educação.
            Partindo deste pressuposto, é possível concluir que a grande
            variedade de cursos, somados ao estigma social brasileiro que influi
            a necessidade de um curso superior em andamento, levaram inúmeros
            candidatos a ingressarem em cursos com os quais não se
            identificavam, consequentemente, resultando em uma desistência.
          </p>
          <h4 className={"chart-article-punchline"}>
            “Em 2010, 11,4% dos alunos abandonaram o curso para o qual foram
            admitidos. Em 2014, esse número chegou a 49%.” (INEP)
          </h4>
          <p className={"chart-article-paragraph"}>
            Com o elevado índice de desistência em todo território nacional, é
            clara a demanda de maior número de programas de permanência, como a
            Casa do Estudante, Auxílio Permanência, Auxílio Estudantil, além da
            democratização de acesso ao mercado de trabalho, com iniciativas
            como Jovem Aprendiz e parcerias público-privadas para estágio a
            serem realizados durante os cursos.
          </p>
        </article>
      </div>
    </Fragment>
  );
}

export default StudentsGraphics;
