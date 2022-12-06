import React from "react";
import "./Porfolio.css";
import IMG1 from "../../assists/portfolio1.png";
import IMG2 from "../../assists/portfolio2.png";
import IMG3 from "../../assists/portfolio3.png";
import IMG4 from "../../assists/portfolio4.png";
import IMG5 from "../../assists/portfolio5.png";
import IMG6 from "../../assists/portfolio6.png";

const Porfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="porfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Hotel Wabsite Design</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              className="btn btn-primary"
            >
              Check Out
            </a>
          </div>
        </article>
        <article className="porfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Text reader and stop watch</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              className="btn btn-primary"
            >
              Check Out
            </a>
          </div>
        </article>
        <article className="porfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>News Wabsite design</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              className="btn btn-primary"
            >
              Check Out
            </a>
          </div>
        </article>
        <article className="porfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Currency and Tok toi Game</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              className="btn btn-primary"
            >
              Check Out
            </a>
          </div>
        </article>
        <article className="porfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Thumnail of HTML to XHTML</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              className="btn btn-primary"
            >
              Check Out
            </a>
          </div>
        </article>
        <article className="porfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Travel Wabsite design</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              className="btn btn-primary"
            >
              Check Out
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Porfolio;
