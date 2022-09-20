import React, { useContext } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import { mergeObjectsToKeyValueArray } from "../../utils/general-functions";
import { Environment } from "../../context/environment-provider";

function GenreGraphics() {
  const { baseURL } = useContext(Environment);

  const [graduatingStudentsByGenreFeliz, setGraduatingStudentsByGenreFeliz] =
    React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${baseURL}/graduating-students-by-genre-feliz`)
      .then((response) => {
        setGraduatingStudentsByGenreFeliz(
          mergeObjectsToKeyValueArray(response.data)
        );
      });
  }, []);

  return (
    <div>
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
                title: `Alunos concluintes em cursos superiores na cidade de Feliz por gênero`,
                description: "Baseado no aumento...",
              },
            }}
            legendToggle
          />
        );
      })}
    </div>
  );
}

export default GenreGraphics;
