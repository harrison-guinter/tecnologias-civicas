import React, { useContext, Fragment, useState } from "react";
import {
  GoogleChartEditor,
  GoogleChartWrapper,
  GoogleViz,
  Chart,
} from "react-google-charts";
import axios from "axios";
import { mergeObjectsToKeyValueArray } from "../../utils/general-functions";
import { Environment } from "../../context/environment-provider";

function GenreGraphics() {
  const { baseURL } = useContext(Environment);

  const [enteringStudentsByGenreFeliz, setenteringStudentsByGenreFeliz] =
    React.useState([]);

  const [graduatingStudentsByGenreFeliz, setGraduatingStudentsByGenreFeliz] =
    React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${baseURL}/entering-students-by-genre-feliz`)
      .then((response) => {
        setenteringStudentsByGenreFeliz(
          mergeObjectsToKeyValueArray(response.data)
        );
      });

    axios
      .get(`${baseURL}/graduating-students-by-genre-feliz`)
      .then((response) => {
        setGraduatingStudentsByGenreFeliz(
          mergeObjectsToKeyValueArray(response.data)
        );
      });
  }, []);

  return (
    <Fragment>
      <div className={"page-topic"}>
        <section className={"chart-group"}>
          <h2 className={"title"}>Relatório de Gênero</h2>
          <figure className={"chart-list"}>
            {enteringStudentsByGenreFeliz.map((element) => {
              const displayableColumns = element.filter((item) =>
                item && !isNaN(item[0]) ? true : false
              );

              return (
                <Fragment>
                  <Chart
                    key={1}
                    chartType="Line"
                    data={[
                      ["Ano", "Masculino", "Feminino"],
                      ...displayableColumns,
                    ]}
                    className={"chart"}
                    options={{
                      chart: {
                        title: `Alunos ingressantes de cursos superiores na cidade de Feliz`,
                        subtitle:
                          "Nota-se a clara paridade de gênero nos ingressos no IFRS Campus Feliz ao longo do tempo.",
                      },
                    }}
                  />
                </Fragment>
              );
            })}

            {graduatingStudentsByGenreFeliz.map((element) => {
              const displayableColumns = element.filter((item) =>
                item && !isNaN(item[0]) ? true : false
              );

              return (
                <Chart
                  key={1}
                  chartType="Line"
                  data={[
                    ["Ano", "Masculino", "Feminino"],
                    ...displayableColumns,
                  ]}
                  className={"chart"}
                  options={{
                    chart: {
                      title: `Alunos concluintes de cursos superiores na cidade de Feliz`,
                      subtitle:
                        "É perceptível uma predominância feminina entre os concluintes, especialmente no ano de 2018.",
                    },
                  }}
                />
              );
            })}
          </figure>
        </section>
        <article className={"chart-article"}>
          <h3 className={"chart-article-title"}>
            O que causa a maior evasão dentre o grupo masculino e como esse
            cenário local se compara com o resto do Brasil?
          </h3>
          <p className={"chart-article-paragraph"}>
            Atualmente, as mulheres se tornaram maioria nas universidades
            brasileiras, diferentemente do padrão consideravelmente igualitário
            demonstrado nos gráficos acima, este fenômeno é explicado por
            diversos fatores, dentre eles, a necessidade de ingressar no mercado
            de trabalho de forma precoce, a fim de contribuir na renda familiar.
          </p>
          <h4 className={"chart-article-punchline"}>
            "Mulheres brasileiras têm 34% mais probabilidade de se formar no
            ensino superior do que seus pares do sexo masculino, mas também
            menos chances de conseguir emprego." (Education At Glance 2019)
          </h4>
          <p className={"chart-article-paragraph"}>
            Embora esta "virada" feminina no cenário do ensino superior possa
            parecer um grande avanço, ela não desestabiliza a estrutura
            patriarcal e machista da sociedade brasileira, apenas reflete suas
            características em um cenário acadêmico, não necessariamente
            domiciliar, como se imaginava ao contemplar a desigualde de gênero
            de décadas passadas. As empresas ainda reproduzem o estigma de que
            existem cursos para determinado gênero, a exemplo da área de
            tecnologia, que, embora em grande expansão, o público feminino é
            tratado com preconceito. É importante também ressaltar que demanda
            de trabalhos manuais e/ou braçais da região condensa um número muito
            superior de pessoas do sexo masculino, refletindo na menor adesão do
            gênero para formação acadêmica.
          </p>
          <p className={"chart-article-paragraph"}></p>
        </article>
      </div>
    </Fragment>
  );
}

export default GenreGraphics;

//TODO chart editing

// const [chartEditor, setChartEditor] = React.useState();
// const [chartWrapper, setChartWrapper] = React.useState();
// const [google, setGoogle] = React.useState();
// const onEditClick = () => {
//   if (!chartWrapper || !google || !chartEditor) {
//     return;
//   }

//   chartEditor.openDialog(chartWrapper);

//   google.visualization.events.addListener(chartEditor, "ok", () => {
//     const newChartWrapper = chartEditor.getChartWrapper();

//     newChartWrapper.draw();
//   });
// };

// chartPackages={["corechart", "controls", "charteditor"]}
// getChartEditor={({ chartEditor, chartWrapper, google }) => {
//   setChartEditor(chartEditor);
//   setChartWrapper(chartWrapper);
//   setGoogle(google);
// }}

{
  /* <button onClick={onEditClick}>Editar Gráfico</button> */
}
