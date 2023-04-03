import { Header } from "../components/header.js";
import { Link } from "react-router-dom";
import "../css/home.css";

export const Home = () => {
  return (
    <div>
      <div className="bg">
        <Header />
        <div id="center-container">
          <p className="home-name">Ethan Pratt</p>
          <p className="home-job-title">Junior Front-End Developer</p>
          <a
            id="home-socials"
            className="home-github"
            href="https://github.com/ghend99"
          >
            <p>Github</p>
          </a>

          <a
            id="home-socials"
            className="home-linkedin"
            href="https://www.linkedin.com/in/ethan-pratt-014904217/"
            target={"_blank"}
          >
            <p>LinkedIn</p>
          </a>

          <a
            id="home-socials"
            className="home-resume"
            href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:74a2b676-94fc-39cd-90a1-4f5be50c7792"
          >
            <p>Resume</p>
          </a>
        </div>
      </div>
    </div>
  );
};
