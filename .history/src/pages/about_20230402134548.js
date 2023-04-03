import "../css/about.css";
import { Header } from "../components/header.js";

export const About = () => {
  return (
    <div className="bg">
      <Header />
      <div id="about-container">
        <section className="about">
          <h1>Hello There!</h1>
          <p className="about-paragraph">
            I'm Ethan Pratt, a self-taught front-end developer whose 6 months
            into their developer journey. In a previous life I trained and
            performed as an actor where I developed a love for collaborative
            work and am now combining that with my passion for all things tech.
            I'm looking to kickstart my career and am open to all junior
            front-end positions.
          </p>
        </section>
      </div>
    </div>
  );
};
