import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>javaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Bootsrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Figma</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Reacts</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">InLearning</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>NextJs</h4>
                <small className="text-light">InLearning</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">InLearning</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">InLearning</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
