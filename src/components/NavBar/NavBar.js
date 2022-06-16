import "./NavBar.scss";
import Switch from "../Switch/Switch";
import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

function NavBar(props) {
  const [scrolled, setscrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setscrolled(true);
    } else {
      setscrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <nav className={scrolled ? "navbar on-scroll" : "navbar"}>
      <div className="navbar__wrapper">
        <ul className="navbar__links">
          <li className="navbar__link-item">
            <a href="#about">about</a>
          </li>
          <li className="navbar__link-item">
            <a href="#skills">skills</a>
          </li>
          <li className="navbar__link-item">
            <a href="#projects">projects</a>
          </li>
          <li className="navbar__link-item">
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
