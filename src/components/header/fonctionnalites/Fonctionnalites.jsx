import React, { useContext, useState } from "react";
import About from '../../about/About';
import Footer from '../../footer/Footer';
import HeaderContent from '../mainContent/MainContent';
//import Portfolio from '../../portfolio/Portfolio';
import Resume from '../../resume/Resume';
import Skills from '../../skills/Skills';
import frenchFlag from '../../../assets/img/frenchFlag.ico';
import britishFlag from '../../../assets/img/britishFlag.ico';
import Switch from "@mui/material/Switch";
import './fonctionnalites.scss';
import '../../about/about.scss';
import { TextContext } from "../../..";

const Fonctionnalites = () => {

    const text = useContext(TextContext);

    const [headerText, setHeaderText] = useState(text.english.headerText);
    const [colorMode, setColorMode] = useState("dark");
    const [language, setLanguage] = useState("english");

    const handleClickFrenchFlag = () => {
        const frenchFlag = document.querySelector("#frenchFlag");
        const britishFlag = document.querySelector("#britishFlag");

        if(britishFlag.classList.contains("selected")){
            britishFlag.classList.remove("selected");
            frenchFlag.classList.add("selected");
            setHeaderText(text.french.headerText);
            setLanguage("français");
        }
    }

    const handleClickBritishFlag = () => {
        const frenchFlag = document.querySelector("#frenchFlag");
        const britishFlag = document.querySelector("#britishFlag");

        if(frenchFlag.classList.contains("selected")){
            frenchFlag.classList.remove("selected");
            britishFlag.classList.add("selected");
            setHeaderText(text.english.headerText);
            setLanguage("english");
        }
    }

    const handleChange = () => {
        const wholeContainer = document.querySelector("body");
        const bodyContainer = document.querySelector("#bodyContainer");
        const aboutContainer = document.querySelector("#aboutContainer");
        const informationBanner = document.querySelector(".informationBanner");
        const informationTextContainer = document.querySelector("#informationTextContainer");
        const skillsContainer = document.querySelector("#skillsContainer");
        const skillsIcons = document.querySelectorAll(".skillsIcons");
        const footerContainer = document.querySelector("#footerContainer");
        const links = document.querySelectorAll(".footerLink");

        wholeContainer.classList.toggle("dayMode");
        wholeContainer.classList.toggle("nightMode");
        bodyContainer.classList.toggle("dayMode");
        bodyContainer.classList.toggle("nightMode");
        aboutContainer.classList.toggle("aboutContainerBright");
        aboutContainer.classList.toggle("aboutContainerDark");
        informationBanner.classList.toggle("informationBannerBright");
        informationBanner.classList.toggle("informationBannerDark");
        informationTextContainer.classList.toggle("brightAboutText");
        informationTextContainer.classList.toggle("darkAboutText");
        skillsContainer.classList.toggle("skillsContainerBright");
        skillsContainer.classList.toggle("skillsContainerDark");
        for(let i = 0; i < skillsIcons.length; i++){
            skillsIcons[i].classList.toggle("skillsIconsBright");
            skillsIcons[i].classList.toggle("skillsIconsDark");
        }
        for(let i = 0; i < links.length; i++){
            links[i].classList.toggle("brightLink");
            links[i].classList.toggle("darkLink");
        }
        footerContainer.classList.toggle("footerContainerBright");
        footerContainer.classList.toggle("footerContainerDark");
        colorMode === "dark" ? setColorMode("bright") : setColorMode("dark");
    }

    return(
        <div id="bodyContainer" className="nightMode">
            <div className="bannerContainer">
                <div className="flagsContainer">
                    <img onClick={handleClickBritishFlag} id="britishFlag" className="flags selected" alt="British flag" height="24" width="24" src={britishFlag} />
                    <img onClick={handleClickFrenchFlag} id="frenchFlag" className="flags" alt="French flag" height="24" width="24" src={frenchFlag} />
                </div>
                <div className="colorModeSwitcherContainer">
                    {
                        colorMode === "dark" ?
                            <span className="bi bi-moon"></span>
                        :
                            <span className="bi bi-brightness-high-fill"></span>
                    }
                    <Switch onChange={handleChange}/>
                </div>
            </div>
            <HeaderContent headerText={headerText}/>
            <About language={language}/>
            <Skills language={language}/>
            <Resume language={language}/>
            <Footer language={language}/>
        </div>
    )
}

export default Fonctionnalites;