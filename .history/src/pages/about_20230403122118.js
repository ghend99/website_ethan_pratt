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
              front-end positions. My goal in this journey is to work closely
              within a team to create the best possible product whilst gorwing
              my understanding of front-end development and learning as many
              tech-stacks as I can to best level possible.
            </p>
            <div className="technology"></div>
          </section>
        </div>
      </div>
    </div>
  );
};
