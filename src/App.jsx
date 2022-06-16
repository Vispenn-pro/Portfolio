import React, { useState } from "react";
import "./App.scss";
import AppContext from "./context/AppContext";
import {
  text,
  languages,
  colorModes,
  weathers,
} from "./constantes/application.constantes";
import MainPage from "./views/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WeatherApp from "./views/WeatherApp";

const App = () => {
  const [language, setLanguage] = useState(languages.english);
  const [colorMode, setColorMode] = useState(colorModes.dark);

  const donneesReferentielles = {
    text,
    language,
    setLanguage,
    colorMode,
    setColorMode,
    weathers,
  };

  return (
    <Router>
      <AppContext.Provider value={donneesReferentielles} className="App">
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/weather_app" element={<WeatherApp />} />
        </Routes>
      </AppContext.Provider>
    </Router>
  );
};

export default App;
