import "./NavBar.scss";
import Switch from "../Switch/Switch";
import React, { useEffect, useState } from "react";

function NavBar(props) {
  const [scrolled, setscrolled] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [skillsActive, setSkillsActive] = useState(false);
  const [projectsActive, setProjectsActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  //function to log how far down the page the window is
  const handleScroll = () => {
    const offset = window.scrollY;

    //set offset for navbar
    if (offset > 0) {
      setscrolled(true);
    } else {
      setscrolled(false);
    }
    //set offset for about section
    if (offset > 245 && offset < 640) {
      setAboutActive(true);
    } else {
      setAboutActive(false);
    }
    //set offset for skills section
    if (offset > 640 && offset < 1135) {
      setSkillsActive(true);
    } else {
      setSkillsActive(false);
    }
    //set offset for Projects section
    if (offset > 1135 && offset < 3670) {
      setProjectsActive(true);
    } else {
      setProjectsActive(false);
    }
    //set offset for Contact section
    if (offset > 3670) {
      setContactActive(true);
    } else {
      setContactActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <nav className={scrolled ? "navbar on-scroll" : "navbar"}>
      <div className="navbar__wrapper">
        <ul className="navbar__links">
          <li className={aboutActive ? "active" : "navbar__link-item"}>
            <a href="#about">about</a>
          </li>
          <li className={skillsActive ? "active" : "navbar__link-item"}>
            <a href="#skills">skills</a>
          </li>
          <li className={projectsActive ? "active" : "navbar__link-item"}>
            <a href="#projects">projects</a>
          </li>
          <li className={contactActive ? "active" : "navbar__link-item"}>
            <a href="#contact">contact</a>
          </li>
        </ul>
        <div className="navbar__switch-container">
          <Switch switchTheme={props.switchTheme} theme={props.theme} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
