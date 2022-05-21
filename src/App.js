import "./App.scss";
import "./styles/global.scss";
import NavBar from "./components/NavBar/NavBar";
import Switch from "./components/Switch/Switch";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import { useDarkMode } from "./utils/useDarkMode";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/themes";
import React from "react";

import { BsChevronCompactDown } from "react-icons/bs";

function App() {
  const [theme, switchTheme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <div className="app">
        <section className="hero">
          <NavBar />
          <div className="hero__wrapper">
            <div class="box">
              <div class="title">
                <span class="block"></span>
                <h1>
                  Jonny Cronk<span></span>
                </h1>
              </div>

              <div class="role">
                <div class="block"></div>
                <p>Front end web developer</p>
              </div>
            </div>
          </div>
          <div className="hero__switch-container">
            <Switch switchTheme={switchTheme} theme={theme} />
          </div>
        </section>
        <div className="divider">
          <BsChevronCompactDown className="divider__arrow" />
        </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;

//credit to: KaioRocha https://codepen.io/KaioRocha/pen/YoEVvZ
