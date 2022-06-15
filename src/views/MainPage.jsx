import React from "react";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import Title from "../components/title/Title";
import Resume from "../components/resume/Resume";
import Skills from "../components/skills/Skills";
import "./mainPage.scss";
import "../components/about/about.scss";
import Banner from "../components/banner/Banner";

const MainPage = () => {
  return (
    <div id="bodyContainer" className="nightMode">
      <Banner />
      <Title />
      <About />
      <Skills />
      <Resume />
      <Footer />
    </div>
  );
};

export default MainPage;
