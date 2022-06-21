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
    // console.log(offset);

    //set offset for navbar
    if (offset > 0) {
      setscrolled(true);
    } else {
      setscrolled(false);
    }
    //set offset for about section
    if (offset > 750 && offset < 1150) {
      setAboutActive(true);
    } else {
      setAboutActive(false);
    }
    //set offset for skills section
    if (offset > 1150 && offset < 1900) {
      setSkillsActive(true);
    } else {
      setSkillsActive(false);
    }
    //set offset for Projects section
    if (offset > 1900 && offset < 4150) {
      setProjectsActive(true);
    } else {
      setProjectsActive(false);
    }
    //set offset for Contact section
    if (offset > 4150) {
      setContactActive(true);
    } else {
      setContactActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  //hamburger menu handlers
  const toggleNav = (e) => {
    const nav = document.querySelector(".navbar__links");
    // const navLinks = document.querySelectorAll(".navbar__link-item a");
    const burger = document.querySelector(".hamburger");
    const line1 = document.querySelector(".line1");
    const line3 = document.querySelector(".line3");
    nav.classList.toggle("appear");
    burger.classList.toggle("rotate");
    line1.classList.toggle("line1-rotate");
    line3.classList.toggle("line3-rotate");
    //animate links
    // navLinks.forEach((link, index) => {
    //   if (link.style.animation) {
    //     link.style.animation = "";
    //   } else {
    //     link.style.animation = `navLinkFade 0.5s ease forwards ${
    //       index / 7 + 0.7
    //     }s`;
    //   }
    // });
  };

  return (
    <nav className={scrolled ? "navbar on-scroll" : "navbar"}>
      <div className="navbar__wrapper">
        <ul className="navbar__links">
          <li
            className={
              aboutActive ? "navbar__link-item active" : "navbar__link-item"
            }
          >
            <a href="#about">about</a>
          </li>
          <li
            className={
              skillsActive ? "navbar__link-item active" : "navbar__link-item"
            }
          >
            <a href="#skills">skills</a>
          </li>
          <li
            className={
              projectsActive ? "navbar__link-item active" : "navbar__link-item"
            }
          >
            <a href="#projects">projects</a>
          </li>
          <li
            className={
              contactActive ? "navbar__link-item active" : "navbar__link-item"
            }
          >
            <a href="#contact">contact</a>
          </li>
        </ul>
        <div className="navbar__switch-container">
          <Switch switchTheme={props.switchTheme} theme={props.theme} />
        </div>
        <div className="hamburger" onClick={toggleNav}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
