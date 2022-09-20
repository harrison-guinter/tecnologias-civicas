import React, { useContext } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import { mergeObjectsToKeyValueArray } from "../../utils/general-functions";
import { Environment } from "../../context/environment-provider";

function StudentsGraphics() {
  const { baseURL } = useContext(Environment);

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
  }, []);

  return (
    <div>
      {enteringAndGraduatingStudents.map((element) => {
        const displayableColumns = element.filter((item) =>
          item && !isNaN(item[0]) ? true : false
        );

        return (
          <Chart
            key={1}
            chartType="Line"
            data={[
              ["Ano", "Alunos \n ingressantes", "Alunos \n concluintes"],
              ...displayableColumns,
            ]}
            className={"chart"}
            options={{
              chart: {
                title: `Alunos ingressantes e concluintes em cursos superiores na cidade de Feliz`,
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

export default StudentsGraphics;
