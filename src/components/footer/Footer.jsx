import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "./footer.scss";
import AppContext from "../../context/AppContext";

const Footer = () => {
  const { text, language } = useContext(AppContext);
  const [inspiration, setInspiration] = useState("");

  useEffect(() => {
    if (language === "english") {
      setInspiration(text.english.inspirationText);
    } else if (language === "français") {
      setInspiration(text.french.inspirationText);
    }
  }, [language, text.english.inspirationText, text.french.inspirationText]);

  return (
    <footer id="footerContainer" className="footerContainerDark">
      <p></p>
      <a
        href="https://www.linkedin.com/in/maxime-bourdin-pro"
        target="_blank"
        rel="noreferrer noopener"
        className="darkLink footerLink"
      >
        <span className="bi bi-linkedin"></span>
      </a>
      <a
        href="https://github.com/Vispenn-pro/Portfolio"
        target="_blank"
        rel="noreferrer noopener"
        className="darkLink footerLink"
      >
        <span className="bi bi-github"></span>
      </a>
      <a
        href="https://www.instagram.com/vispenn/"
        target="_blank"
        rel="noreferrer noopener"
        className="darkLink footerLink"
      >
        <span className="bi bi-instagram"></span>
      </a>
      <br />
      <a
        href="mailto: maxime.bourdin.pro@gmail.com"
        className="darkLink footerLink"
      >
        maxime.bourdin.pro@gmail.com
      </a>
      <br />
      <a
        className="credits darkLink footerLink"
        href="https://dorota1997.github.io/react-frontend-dev-portfolio/"
        target="_blank"
        rel="noreferrer noopener"
      >
        {inspiration}
      </a>
    </footer>
  );
};

export default Footer;
