import "./Skills.scss";
import Divider from "../../components/Divider/Divider";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoSass } from "react-icons/io";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiJira,
  SiPostman,
} from "react-icons/si";
import { GrReactjs, GrNode, GrMysql } from "react-icons/gr";
import { FaDatabase, FaGithub, FaTerminal, FaFigma } from "react-icons/fa";

function Skills() {
  return (
    <>
      <section className="skills" id="skills">
        <div className="skills__wrapper">
          <h2 className="skills__title">Skills</h2>
          <div className="skills__grid-container">
            {/* front end */}
            <div className="skills__grid-item">
              <AiOutlineHtml5 className="skills__grid-item--logo" />
              <p className="skills__grid-item--text">HTML5</p>
            </div>
            <div className="skills__grid-item">
              <IoLogoCss3 className="skills__grid-item--logo" />
              <p className="skills__grid-item--text">CSS</p>
            </div>
            <div className="skills__grid-item">
              <SiJavascript className="skills__grid-item--logo" />
              <p className="skills__grid-item--text">Javascript</p>
            </div>
            <div className="skills__grid-item">
              <IoLogoSass className="skills__grid-item--logo" />
              <p className="skills__grid-item--text">Sass</p>
            </div>
            <div className="skills__grid-item">
              <GrReactjs className="skills__grid-item--logo" />
              <p className="skills__grid-item--text">React</p>
            </div>
            {/* back end */}
            <div className="skills__grid-item">
              <GrNode className="skills__grid-item--logo" />
              <p className="skills__grid-item--text">Node</p>
            </div>
            <div className="skills__grid-item">
              <SiExpress className="skills__grid-item--logo" />
              <p className="skills__grid-item--text">Express</p>
            </div>
            <div className="skills__grid-item">
              <GrMysql className="skills__grid-item--logo" />
              <p className="skills__grid-item--text">MySQL</p>
            </div>
            <div className="skills__grid-item">
              <SiMongodb className="skills__grid-item--logo" />
              <p className="skills__grid-item--text">MongoDB</p>
            </div>
            <div className="skills__grid-item">
              <FaDatabase className="skills__grid-item--logo" />
              <p className="skills__grid-item--text">REST api's</p>
            </div>
            {/* Other */}
            <div className="skills__grid-item">
              <FaGithub className="skills__grid-item--logo" />
              <p className="skills__grid-item--text">Git</p>
            </div>
            <div className="skills__grid-item">
              <FaTerminal className="skills__grid-item--logo" />
              <p className="skills__grid-item--text">Command Line</p>
            </div>
            <div className="skills__grid-item">
              <SiJira className="skills__grid-item--logo" />
              <p className="skills__grid-item--text">Jira</p>
            </div>
            <div className="skills__grid-item">
              <SiPostman className="skills__grid-item--logo" />
              <p className="skills__grid-item--text">Postman</p>
            </div>
            <div className="skills__grid-item">
              <FaFigma className="skills__grid-item--logo" />
              <p className="skills__grid-item--text">Figma</p>
            </div>
          </div>
        </div>
        <Divider link="#projects" />
      </section>
    </>
  );
}

export default Skills;
