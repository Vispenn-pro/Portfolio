import React, { useContext, useState, useEffect } from "react";
import "./skills.scss";
import reactLogo from "../../assets/img/reactLogo.png";
import javaLogo from "../../assets/img/javaLogo.png";
import postgresqlLogo from "../../assets/img/postgresqlLogo.png";
import jsLogo from "../../assets/img/jsLogo.png";
import sassLogo from "../../assets/img/sassLogo.png";
import htmlLogo from "../../assets/img/htmlLogo.png";
import cssLogo from "../../assets/img/cssLogo.png";
import springLogo from "../../assets/img/springLogo.png";
import jpaLogo from "../../assets/img/jpaLogo.png";
import hibernateLogo from "../../assets/img/hibernateLogo.png";
import lombokLogo from "../../assets/img/lombokLogo.png";
import postmanLogo from "../../assets/img/postmanLogo.png";
import gitLogo from "../../assets/img/gitLogo.png";
import jenkinsLogo from "../../assets/img/jenkinsLogo.png";
import jiraLogo from "../../assets/img/jiraLogo.png";
import AppContext from "../../context/AppContext";
import Pulse from "react-reveal/Pulse";

const Skills = () => {
  const { text, language } = useContext(AppContext);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (language === "english") {
      setTitle(text.english.titles.skillsTitle);
    } else if (language === "français") {
      setTitle(text.french.titles.skillsTitle);
    }
  }, [
    language,
    text.english.titles.skillsTitle,
    text.french.titles.skillsTitle,
  ]);

  return (
    <section id="skillsContainer">
      <h2>{title}</h2>
      <div id="skillsIconsContainer" className="skillsIconsContainer">
        <Pulse>
          <div className="skillsIconsDark skillsIcons">
            <img alt="logo react" src={reactLogo} height="55" width="45" />
            <p>ReactJS</p>
          </div>
        </Pulse>
        <Pulse>
          <div className="skillsIconsDark skillsIcons">
            <img alt="logo java" src={javaLogo} height="55" width="40" />
            <p>Java</p>
          </div>
        </Pulse>
        <Pulse>
          <div className="skillsIconsDark skillsIcons">
            <img
              alt="logo postgresql"
              src={postgresqlLogo}
              height="55"
              width="55"
            />
            <p>PostgreSQL</p>
          </div>
        </Pulse>
        <Pulse>
          <div className="skillsIconsDark skillsIcons">
            <img alt="logo javascript" src={jsLogo} height="55" width="40" />
            <p>Javascript</p>
          </div>
        </Pulse>
        <Pulse>
          <div className="skillsIconsDark skillsIcons">
            <img alt="logo html" src={htmlLogo} height="55" width="55" />
            <p>HTML5</p>
          </div>
        </Pulse>
        <Pulse>
          <div className="skillsIconsDark skillsIcons">
            <img alt="logo css" src={cssLogo} height="55" width="40" />
            <p>CSS3</p>
          </div>
        </Pulse>
        <Pulse>
          <div className="skillsIconsDark skillsIcons">
            <img alt="logo sass" src={sassLogo} height="55" width="55" />
            <p>Sass</p>
          </div>
        </Pulse>
        <Pulse>
          <div className="skillsIconsDark skillsIcons">
            <img
              alt="logo springboot"
              src={springLogo}
              height="55"
              width="55"
            />
            <p>Springboot</p>
          </div>
        </Pulse>
        <Pulse>
          <div className="skillsIconsDark skillsIcons">
            <img alt="logo jpa" src={jpaLogo} height="55" width="55" />
            <p>JPA</p>
          </div>
        </Pulse>
        <Pulse>
          <div className="skillsIconsDark skillsIcons">
            <img
              alt="logo hibernate"
              src={hibernateLogo}
              height="55"
              width="55"
            />
            <p>Hibernate</p>
          </div>
        </Pulse>
        <Pulse>
          <div className="skillsIconsDark skillsIcons">
            <img alt="logo lombok" src={lombokLogo} height="55" width="50" />
            <p>Lombok</p>
          </div>
        </Pulse>
        <Pulse>
          <div className="skillsIconsDark skillsIcons">
            <img alt="logo postman" src={postmanLogo} height="55" width="55" />
            <p>Postman</p>
          </div>
        </Pulse>
        <Pulse>
          <div className="skillsIconsDark skillsIcons">
            <img alt="logo git" src={gitLogo} height="55" width="55" />
            <p>Git</p>
          </div>
        </Pulse>
        <Pulse>
          <div className="skillsIconsDark skillsIcons">
            <img alt="logo jenkins" src={jenkinsLogo} height="55" width="40" />
            <p>Jenkins</p>
          </div>
        </Pulse>
        <Pulse>
          <div className="skillsIconsDark skillsIcons">
            <img alt="logo jira" src={jiraLogo} height="55" width="55" />
            <p>Jira</p>
          </div>
        </Pulse>
      </div>
    </section>
  );
};

export default Skills;
