import { Header } from "../components/header.js";
import "../css/header.css";
import "../css/project.css";
import school from "../images/schoolgif.gif";
import login from "../images/logingif.gif";
import study from "../images/studygif.gif";

export const Project = () => {
  return (
    <div className="bg">
      <Header />
      <div id="projects-container">
        {/* Project 1 */}
        <div id="single-project">
          <p className="project-name">School App</p>
          <div id="project-image">
            <img
              className="image"
              src={school}
              alt="Gif of School Application"
            />
            <p>Javascript, HTML, CSS</p>
            <p id="project-information">
              Designed for teachers to allow for easier tracking and storage of
              student information.
            </p>
          </div>
          <div className="project-footer">
            <a href="https://github.com/ghend99/School-app" target={"_blank"}>
              <p className="source-link">Source Code</p>
            </a>

            <a
              href="https://gentle-unicorn-cf6c09.netlify.app/"
              target={"_blank"}
            >
              <p className="source-demo">Live Demo</p>
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div id="single-project">
          <p className="project-name">Login-Form</p>
          <div id="project-image">
            <img className="image" src={login} alt="Gif of Login-Form" />
            <p>React, CSS, Firebase</p>
            <p id="project-information">
              A mobile login page using firebase as the backend, allowing for
              the easy creation of accounts and a method to reset passwords.
            </p>
          </div>
          <div className="project-footer">
            <a href="https://github.com/ghend99/login-page" target={"_blank"}>
              <p className="source-link">Source Code</p>
            </a>

            <a
              href="https://soft-cascaron-067620.netlify.app/"
              target={"_blank"}
            >
              <p className="source-demo">Live Demo</p>
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div id="single-project">
          <p className="project-name">Study-Tracker</p>
          <div id="project-image">
            <img
              className="image"
              src={study}
              alt="Gif of Study-Tracker Application"
            />
            <p>Javascript, HTML, CSS</p>
            <p id="project-information">
              The first project I built that allowed myself to track how long I
              spent studying per day. Focused on DOM, Arrays, and working with a
              dynamic CSS
            </p>
          </div>
          <div className="project-footer">
            <a
              href="https://github.com/ghend99/study-tracker"
              target={"_blank"}
            >
              <p className="source-link">Source Code</p>
            </a>

            <a href="https://shiny-druid-eadd68.netlify.app/" target={"_blank"}>
              <p className="source-demo">Live Demo</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
