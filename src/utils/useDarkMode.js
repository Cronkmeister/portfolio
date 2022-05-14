import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  //set the theme in local storage
  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  //function to switch between themes
  const switchTheme = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  //when browser is refreshing see if there is a theme already set in local storage, else set the theme to light
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("light");
  }, []);

  return [theme, switchTheme];
};
