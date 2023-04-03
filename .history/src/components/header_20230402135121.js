import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import resume from "../images/resume.png";
import menu from "../images/menu.png";

export const Header = () => {
  const [opacity, setOpacity] = useState(0);

  return (
    <div className="header-container">
      <Link className="header-title" to="/">
        Hello World.
      </Link>
      <Link id="header-nav" className="header-projects" to="/projects">
        &lt;Projects&gt;
      </Link>
      <Link id="header-nav" className="header-about" to="/about">
        &lt;About Me&gt;
      </Link>
      <Link id="header-nav" className="header-contact" to="/contact">
        &lt;Contact Me&gt;
      </Link>
      <a href="https://github.com/ghend99" target={"_blank"}>
        <img id="header-socials" className="header-github" src={github} />
      </a>
      <a href="https://www.linkedin.com/in/ethanapratt/" target={"_blank"}>
        <img id="header-socials" className="header-linkedin" src={linkedin} />
      </a>
      <a
        href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:74a2b676-94fc-39cd-90a1-4f5be50c7792"
        target={"_blank"}
      >
        <img id="header-socials" className="header-resume" src={resume} />
      </a>

      <img
        className="header-socials-menu"
        src={menu}
        onClick={() => setOpacity(1)}
      />
      <div className="header-socials-list" style={{ opacity }}>
        <p>Github</p>
        <p>LinkedIn</p>
        <p>Resume</p>
      </div>
    </div>
  );
};
