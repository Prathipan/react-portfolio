import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.JPG";
// import CV from "../../assets/Prathipan-CV.pdf";
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
            Full stack developer,I have created web pages with UI/UX user
            interface , I'm very much intrested in problem solving and love coding.
          </p>

          <a href="https://drive.google.com/drive/folders/1R3e5S0QGgm-5lk524C53uiRC9Fxr_OUK?usp=sharing" className="button button-flex" target="_blank">
            Resume <i class="uil uil-message button-icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
