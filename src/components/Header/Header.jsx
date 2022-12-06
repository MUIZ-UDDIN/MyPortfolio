import React from "react";
import "./Header.css";
import Cta from "./CTA";
import ME from "../../assists/prof1.png";
import HeaderSocails from "./HeaderSocails";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>MUEEZ UD DIN</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />
        <HeaderSocails />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="Scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
