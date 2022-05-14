import "./NavBar.scss";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <ul className="navbar__links">
          <li className="navbar__link-item">about</li>
          <li className="navbar__link-item">skills</li>
          <li className="navbar__link-item">projects</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
