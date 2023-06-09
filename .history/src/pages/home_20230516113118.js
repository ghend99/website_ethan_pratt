import { Header } from "../components/header.js";

import "../css/home.css";

export const Home = () => {
  return (
    <div>
      <div className="bg">
        <Header />
        <div id="center-container">
          <p className="home-name">Ethan Pratt</p>
          <p className="home-job-title">Junior Front-End Developer</p>

          <div id="home-socials-container">
            <a
              id="home-socials"
              className="home-github"
              href="https://github.com/ghend99"
              target={"_blank"}
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
              href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:d5ccbe91-d2b9-3f84-a412-6f90544b9fa4"
              target="{_blank}"
            >
              <p>Resume</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
