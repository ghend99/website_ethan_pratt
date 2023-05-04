import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import resume from "../images/resume.png";
import menu from "../images/menu.png";

export const Header = () => {
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
        href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:0e716eba-f93a-39aa-a298-0bb1b0163f04"
        target={"_blank"}
      >
        <img id="header-socials" className="header-resume" src={resume} />
      </a>

      <div className="header-socials-list">
        <a href="https://github.com/ghend99" target={"_blank"}>
          <p className="header-socials-text">Github</p>
        </a>
        <a href="https://www.linkedin.com/in/ethanapratt/" target={"_blank"}>
          <p className="header-socials-text">LinkedIn</p>
        </a>
        <a
          href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:b2a6d833-399a-3a1e-b10f-a08934ce9ea7"
          target={"_blank"}
        >
          <p className="header-socials-text">Resume</p>
        </a>
      </div>
    </div>
  );
};
