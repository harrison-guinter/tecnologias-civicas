import React, { useContext } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import { transformObjectToKeyValueArray } from "../../utils/general-functions";
import { Environment } from "../../context/environment-provider";

function CoursesGraphics() {
  const { baseURL } = useContext(Environment);

  const [courses, setCoursesFeliz] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${baseURL}/courses-feliz`).then((response) => {
      setCoursesFeliz(
        response.data.map((element) => transformObjectToKeyValueArray(element))
      );
    });
  }, []);

  return (
    <div>
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

export default CoursesGraphics;
