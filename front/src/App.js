import React, { Fragment } from "react";
import "./App.css";
import GenreGraphics from "./graphics/genre/genre-graphics";
import EnvironmentProvider from "./context/environment-provider";

function App() {
  return (
    <Fragment>
      <EnvironmentProvider>
        <GenreGraphics></GenreGraphics>
      </EnvironmentProvider>
    </Fragment>
  );
}

export default App;
