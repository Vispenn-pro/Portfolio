import React, { useContext, useEffect, useState } from "react";
import "./title.scss";
import PropTypes from "prop-types";
import { text } from "../../constantes/application.constantes";
import AppContext from "../../context/AppContext";
import Fade from "react-reveal/Fade";

const Title = () => {
  const { language } = useContext(AppContext);

  const [titleText, setTitleText] = useState(text.french.titleText);

  useEffect(() => {
    if (language === "english") {
      setTitleText(text.english.titleText);
    } else if (language === "français") {
      setTitleText(text.french.titleText);
    }
  }, [language]);

  return (
    <Fade>
      <div className="headerContentContainer">
        <span className="bi bi-stack titleContent"></span>
        <h1 className="titleContent">Maxime Bourdin</h1>
        <h1 className="titleContent">-</h1>
        <h1 className="titleContent">{titleText}</h1>
      </div>
    </Fade>
  );
};

export default Title;

Title.propTypes = {
  headerText: PropTypes.string,
};
