import "../css/about.css";
import { Header } from "../components/header.js";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import react from "../images/react.png";

export const About = () => {
  return (
    <div className="bg">
      <Header />
      <div className="about-container">
        {/* Infomration Container */}
        <div className="info-container">
          <section className="about">
            <h1 className="about-header">Hello There!</h1>
            <p className="about-paragraph">
              I'm Ethan Pratt, a self-taught front-end developer whose 6 months
              into their developer journey. In a previous life I trained and
              performed as an actor where I developed a love for collaborative
              work and am now combining that with my passion for all things
              tech. I'm looking to kickstart my career and am open to all junior
              front-end positions.
            </p>
          </section>
        </div>

        {/* Technology Container */}
        <div id="technology-container">
          <h2 className="technology-header">My technologies</h2>
          <img
            className="stack-html"
            id="stack-icon"
            src={html}
            alt="html logo"
          />
          <img className="stack-css" id="stack-icon" src={css} alt="css-logo" />
          <img
            className="stack-javascript"
            id="stack-icon"
            src={javascript}
            alt="javascript-logo"
          />
          <img
            className="stack-react"
            id="stack-icon"
            src={react}
            alt="react-logo"
          />
        </div>
      </div>
    </div>
  );
};
