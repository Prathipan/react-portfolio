import React from "react";
import Projects from "./Projects";
import "./project.css";

const Project = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section-title">Projects</h2>
      <span className="section-subtitle">Most recent works</span>
      <div className="common-credentials">
        <h2>Common Credentials</h2>
        <div>
          <span>Admin : admin@gmail.com | pwd : 123456</span>
          <br />
          <span>User : testUser@gmail.com | pwd : 123456</span>
        </div>
      </div>

      <Projects />
    </section>
  );
};

export default Project;
