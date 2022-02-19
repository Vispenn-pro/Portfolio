import React, { useState, useContext, useEffect } from "react";
import './about.scss';
import profilePicture from "../../assets/img/profilePicture.png";
import reactLogo from "../../assets/img/reactLogo.png";
import javaLogo from "../../assets/img/javaLogo.png";
import postgresqlLogo from "../../assets/img/postgresqlLogo.png";
import { TextContext } from "../..";

const About = ({ language }) => {

    const text = useContext(TextContext);
    const [paragraphs, setParagraphs] = useState([]);

    useEffect(() => {
        language === "english" && setParagraphs(Object.values(text.english.aboutText));
        language === "français" && setParagraphs(Object.values(text.french.aboutText));
    }, [language, text.english.aboutText, text.french.aboutText])

    return(
        <section id="aboutContainer" className="aboutContainerDark">
            <div className="polaroidEffect">
                <img alt="Maxime Bourdin" height="256" width="256" src={profilePicture} />
                <div className="techLogos">
                    <img alt="logo react" height="72" width="64" src={reactLogo} />
                    <img alt="logo java" height="72" width="64" src={javaLogo} />
                    <img alt="logo postgresql" height="72" width="64" src={postgresqlLogo} />
                </div>
            </div>
            <div className="informationContainer">
                <div className="informationBanner informationBannerDark">
                    <div className="button close"/>
                    <div className="button minimize" />
                    <div className="button expand" />                    
                </div>
                <div id="informationTextContainer" className="informationTextContainer darkAboutText">
                    {paragraphs.map((item, index) => 
                        <p key={index}>{item}</p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default About;