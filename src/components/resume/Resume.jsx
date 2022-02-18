import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { TextContext } from "../..";
import "./resume.scss";

const Resume = ({ language }) => {

    const text = useContext(TextContext);
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        language === "english" && setExperiences(Object.values(text.english.resumeText));
        language === "français" && setExperiences(Object.values(text.french.resumeText));
    }, [language, text.english.resumeText, text.french.resumeText])

    return(
        <section id="resume">
            <h2>Resume</h2>
            <div className="resumeContainer">
                {experiences.map((item, index) => 
                index % 2 === 0 ?
                    (
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
                    )
                :
                (
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
                )
                )}
            </div>
        </section>
    )
}

/*



*/

export default Resume;