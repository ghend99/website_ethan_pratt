import { Header } from "../components/header.js";
import "../css/header.css";
import "../css/project.css";
import school from "../images/schoolgif.gif";
import login from "../images/logingif.gif";
import study from "../images/studygif.gif";
import guardian from "../images/guardiangif.gif";
import news from "../images/newsgif.gif";
import lotrdb from "../images/lotrgif.gif";

export const Project = () => {
  return (
    <div className="bg">
      <Header />
      <div id="projects-container">
        <div id="single-project">
          <p className="project-name">The Lord of the Rings Databse</p>
          <div id="project-image">
            <img className="image" src={lotrdb} alt="Gif of LOTR databse" />
            <p id="project-stacks-used">PHP, HTML, CSS, phpMyAdmin</p>
            <p id="project-information">
              Database designed for inputting and searching for data inside of a
              databse. Still under construction.
            </p>
          </div>
          <div className="project-footer">
            <a href="#" target={"_blank"}>
              <p className="source-link">N/A</p>
            </a>

            <a href="#" target={"_blank"}>
              <p className="source-demo">N/A</p>
            </a>
          </div>
        </div>

        {/* Project 4 */}
        <div id="single-project">
          <p className="project-name">News Media Website</p>
          <div id="project-image">
            <img
              className="image"
              src={news}
              alt="Gif of static Guardian website"
            />
            <p id="project-stacks-used">Javascript, HTML, CSS</p>
            <p id="project-information">
              A project focused around following a design brief and example.
              Utilised CSS grid layout to allow for a clean design.
            </p>
          </div>
          <div className="project-footer">
            <a href="https://github.com/ghend99/News-Media" target={"_blank"}>
              <p className="source-link">Source Code</p>
            </a>

            <a
              href="https://bespoke-truffle-841455.netlify.app/"
              target={"_blank"}
            >
              <p className="source-demo">Live Demo</p>
            </a>
          </div>
        </div>

        {/* Project 1 */}
        <div id="single-project">
          <p className="project-name">School App</p>
          <div id="project-image">
            <img
              className="image"
              src={school}
              alt="Gif of School Application"
            />
            <p id="project-stacks-used">Javascript, HTML, CSS</p>
            <p id="project-information">
              Designed for teachers to allow for easier tracking and storage of
              student information.
            </p>
          </div>
          <div className="project-footer">
            <a
              href="https://github.com/ghend99/School-Application"
              target={"_blank"}
            >
              <p className="source-link">Source Code</p>
            </a>

            <a
              href="https://cheerful-praline-de8d89.netlify.app/"
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
            <p id="project-stacks-used">React, CSS, Firebase</p>
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
      </div>
    </div>
  );
};
