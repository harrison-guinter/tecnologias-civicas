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
      <section className={"chart-group"}>
        <h2 className={"chart-group-title"}>Relatório de Gênero</h2>
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
                data={[["Ano", "Masculino", "Feminino"], ...displayableColumns]}
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
      <article>
        <h3 className={"chart-article-title"}>
          O que causa a maior evasão dentre o grupo masculino?
        </h3>
        <p className={"chart-article-paragraph"}>
          Dentre os principais fatores...
        </p>
      </article>
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
