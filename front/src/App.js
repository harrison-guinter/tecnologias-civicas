import React, { Fragment } from "react";
import GenreGraphics from "./graphics/genre/genre-graphics";
import EnvironmentProvider from "./context/environment-provider";
import StudentsGraphics from "./graphics/general/students-and-courses-graphics";
import Header from "./page-components/header/header";
import Resume from "./page-components/resume/resume";

import "./App.css";

function App() {
  return (
    <Fragment>
      <EnvironmentProvider>
        <Header></Header>
        <Resume></Resume>
        <StudentsGraphics></StudentsGraphics>
        <GenreGraphics></GenreGraphics>
      </EnvironmentProvider>
    </Fragment>
  );
}

export default App;
