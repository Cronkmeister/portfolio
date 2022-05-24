import "./NavBar.scss";
// import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
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
      </div>
    </div>
  );
}

export default NavBar;
