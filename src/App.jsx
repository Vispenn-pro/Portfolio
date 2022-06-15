import React, { useState } from "react";
import "./App.scss";
import AppContext from "./context/AppContext";
import {
  text,
  languages,
  colorModes,
} from "./constantes/application.constantes";
import MainPage from "./views/MainPage";

const App = () => {
  const [language, setLanguage] = useState(languages.english);
  const [colorMode, setColorMode] = useState(colorModes.dark);

  const donneesReferentielles = {
    text,
    language,
    setLanguage,
    colorMode,
    setColorMode,
  };

  return (
    <AppContext.Provider value={donneesReferentielles} className="App">
      <MainPage />
    </AppContext.Provider>
  );
};

export default App;
