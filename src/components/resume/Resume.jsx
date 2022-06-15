import React, { useContext, useState } from "react";
import { useEffect } from "react";
import "./resume.scss";
import AppContext from "../../context/AppContext";
import Fade from "react-reveal/Fade";

const Resume = () => {
  const { text, language } = useContext(AppContext);
  const [experiences, setExperiences] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (language === "english") {
      setExperiences(Object.values(text.english.resumeText));
      setTitle(text.english.titles.resumeTitle);
    } else if (language === "français") {
      setExperiences(Object.values(text.french.resumeText));
      setTitle(text.french.titles.resumeTitle);
    }
  }, [
    language,
    text.english.resumeText,
    text.french.resumeText,
    text.english.titles.resumeTitle,
    text.french.titles.resumeTitle,
  ]);

  return (
    <section id="resume">
      <h2>{title}</h2>
      <div className="resumeContainer">
        {experiences.map((item, index) =>
          index % 2 === 0 ? (
            <Fade right>
              <div key={index} className="timeline-block timeline-block-right">
                <div className="marker" />
                <div className="timeline-content">
                  <h5>{item.title}</h5>
                  <span>{item.workplace}</span>
                  <br />
                  <span>{item.dates}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            </Fade>
          ) : (
            <Fade left>
              <div key={index} className="timeline-block timeline-block-left">
                <div className="marker" />
                <div className="timeline-content">
                  <h5>{item.title}</h5>
                  <span>{item.workplace}</span>
                  <br />
                  <span>{item.dates}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            </Fade>
          )
        )}
      </div>
    </section>
  );
};

export default Resume;
