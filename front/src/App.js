import { Chart } from "react-google-charts";
import  React  from "react"
import  axios  from "axios"
import './App.css';

const baseURL = "http://localhost:3000";

export const optionsEstudantes = {
  chart: {
    title: "Número de Estudantes de Cursos Superiores na Cidade de Feliz",
    subtitle: "Baseado no aumento..."
 
  },
};

function App() {

  const [felizByTime,setFelizByTime] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${baseURL}/courses-by-time-feliz`).then((response) => {
      setFelizByTime(response.data.map(element => {
        let newElement = []
        Object.keys(element).forEach(key => {
        
           newElement[Object.keys(element).indexOf(key)] = [key, element[key]]
        })
       
        return newElement;
       
      }))
      })
  
  }, []);

  return (
    <div >
     {felizByTime.map(element => {

       if(felizByTime.indexOf(element) <= 100) {
        const displayableColumns = []
        element.forEach(item => {
          if(!isNaN(item[0])) displayableColumns.push(item.map(element => {
            if(element == item[1]) {
              element = Number(element)
            }
            return element
          }))
        })
    
        return (<Chart
                  chartType="Line"
                  data={[["Ano", "Cursos"], ...displayableColumns]}
                  width="70%"
                  height="300px"
                  options={{
                    chart: {
                      title: "Número de Cursos Superiores na Cidade de " + element[11][1],
                      description: "Baseado no aumento..."
                    },
                  }}
                  legendToggle
                />)
        }
     })}
      </div>
  );
}

export default App;
