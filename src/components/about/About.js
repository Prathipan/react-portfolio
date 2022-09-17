import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.JPG";
import CV from "../../assets/Prathipan-CV.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">My Introduction</span>

      <div className="about-container container grid">
        <img src={AboutImg} alt="" className="about-img" />

        <div className="about-data">
          <Info />

          <p className="about-description">
            Frontend developer,I have created web pages with UI/UX user
            interface , I have 1 year of experience and many clients are happy
            with the projects carried out.
          </p>

          <a download="" href={CV} className="button button-flex">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;