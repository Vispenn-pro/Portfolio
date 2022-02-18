import React from "react";
import "./mainContent.scss";

const MainContent = ({ headerText }) => {

    return(
        <div className="headerContentContainer">
            <span className="bi bi-stack"></span>
            <h1>Maxime Bourdin</h1>
            <h1>-</h1>
            <h1>{headerText}</h1>
        </div>
    )
}

export default MainContent;