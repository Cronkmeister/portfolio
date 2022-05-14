import "./App.scss";
import "./styles/global.scss";
import NavBar from "./components/NavBar/NavBar";
import Switch from "./components/Switch/Switch";
import { useDarkMode } from "./utils/useDarkMode";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/themes";
import React from "react";

function App() {
  const [theme, switchTheme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <div className="app">
        <NavBar />
        <section className="hero">
          <div className="hero__wrapper">
            <p className="hero__text">Hello 👋 my name is Jonny</p>
            <p className="hero__text">I am a front end web developer</p>
          </div>
          <div className="hero__switch-container">
            <Switch switchTheme={switchTheme} theme={theme} />
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
