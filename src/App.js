import "./App.scss";
import "./styles/global.scss";
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Divider from "./components/Divider/Divider";
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
        <section className="hero">
          <NavBar switchTheme={switchTheme} theme={theme} />
          <div className="hero__wrapper">
            <div className="box">
              <div className="title">
                <span className="block"></span>
                <h1>
                  Jonny Cronk<span></span>
                </h1>
              </div>

              <div className="role">
                <div className="block"></div>
                <p>Front end web developer</p>
              </div>
            </div>
          </div>

          <Divider link="#about" />
        </section>

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
