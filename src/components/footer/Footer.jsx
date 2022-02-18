import React from "react";
import "./footer.scss";

const Footer = () => {
    return(
        <footer id="footerContainer" className="footerContainerDark">
            <p></p>
            <a href="https://www.linkedin.com/in/maxime-bourdin-pro" target="_blank" rel="noreferrer noopener" className="darkLink footerLink">
                <span className="bi bi-linkedin"></span>
            </a>
            <a href="https://github.com/Vispenn-pro/Portfolio" target="_blank" className="darkLink footerLink">
                <span className="bi bi-github"></span>
            </a>
            <a href="https://www.instagram.com/vispenn/" target="_blank" rel="noreferrer noopener" className="darkLink footerLink">
                <span className="bi bi-instagram"></span>
            </a>
            <br />
            <a href="mailto: maxime.bourdin.pro@gmail.com" className="darkLink footerLink">maxime.bourdin.pro@gmail.com</a>
            <br />
            <a className="credits darkLink footerLink" href="https://dorota1997.github.io/react-frontend-dev-portfolio/" target="_blank" rel="noreferrer noopener">
                Inspiration for this portfolio page
            </a>
        </footer>
    )
}

export default Footer;