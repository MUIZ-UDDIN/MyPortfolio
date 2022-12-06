import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        MUEEZ UD DIN
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socails">
        <a
          href="https://www.facebook.com/profile.php?id=100081067539941"
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/itz.mozoo43/" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://github.com/mueez-uddin" target="_blank">
          <AiOutlineGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; MUEEZ PORTFOLIO. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
