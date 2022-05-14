import "./Switch.scss";
import React, { useState } from "react";
import sun from "../../assests/icons/sun-solid.svg";
import moon from "../../assests/icons/moon-solid.svg";

function Switch({ theme, switchTheme }) {
  const [isToggled, setIsToggled] = useState(theme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    switchTheme();
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="slider" />
      <img className="switch__icon sun" src={sun} alt="sun" />
      <img className="switch__icon moon" src={moon} alt="moon" />
    </label>
  );
}

export default Switch;
